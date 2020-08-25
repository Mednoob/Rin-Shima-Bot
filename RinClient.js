const Discord = require("discord.js")
const Fs = require("fs")
const Rin = new Discord.Client({
    disableMentions: "everyone"
})
const { Token, Prefix } = require("./Config/Config.json")

Rin.CmdAlias = new Discord.Collection();
Rin.Cmd = new Discord.Collection();

const CmdFile = Fs.readdirSync("./Commands").filter(FileFilter => FileFilter.endsWith(".js"))
CmdFile.forEach(FileFilter => {
    const Command = require("./Commands/" + FileFilter)
    Rin.Cmd.set(Command.name, Command)
    Command.alias.forEach(Alias => {
        Rin.CmdAlias.set(Alias, Command)
    })
})

Rin.on("ready", () => {
    console.log("[READY]  " + Rin.user.username + " is Ready!")
    Rin.user.setActivity({name: "With You >v<", type: "PLAYING"})
    console.log("[ACTIVITY]  Activity done!")
})

Rin.on("message", Msg => {
    let Arguments = Msg.content.slice(Prefix.length).trim().split(" ")
    let CommandCall = Arguments.shift().toLowerCase()

    if(Msg.author.bot) return;
    if(Msg.content == `<@${Rin.user.id}>` | `<@!${Rin.user.id}>`) {
        Msg.channel.send(`Hello! My name is ${Rin.user.username}. My prefix is ${Prefix}`)
    }

    try {
        const CommandCallFile = Rin.Cmd.get(CommandCall) || Rin.CmdAlias.get(CommandCall)
        if(!CommandCallFile) return;
        CommandCallFile.run(Rin, Msg, Arguments)
    } catch(err) {
        Msg.channel.send("There's an error when trying to do the command: " + err)
    } finally {
        Rin.channels.cache.get("741771573048115260").send(`${Msg.author.tag} used ${CommandCall} command in ${Msg.channel.name} -> ${Msg.guild.name}`)
    }
})

Rin.login(Token)