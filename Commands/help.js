const Discord = require("discord.js")

module.exports = {
    name: "help",
    helpname: "Help",
    description: "Bot command list",
    usage: "rin>help [Command Name]",
    alias: ["?", "cmd", "h", "cmdlist"],
    alternatedescription: "Show Bot command list",
    run: async(Rin, Msg, Arguments) => {
        if(!Arguments[0] == "") {
            const CmdGet = Rin.Cmd.get(Arguments[0]) || Rin.CmdAlias.get(Arguments[0])
            if(!CmdGet) return Msg.channel.send("Command not found!");
            const GetEmbed = new Discord.MessageEmbed()
            .setColor(299646)
            .setTitle(CmdGet.helpname + " command")
            .setDescription(CmdGet.alternatedescription)
            .addFields({
                name: "Alias(es)",
                value: CmdGet.alias,
                inline: true
            }, {
                name: "Usage",
                value: CmdGet.usage,
                inline: true
            })
            Msg.channel.send(GetEmbed)
        }
        else {
            const HelpEmbed = new Discord.MessageEmbed()
            .setColor(299646)
            .setTitle("Help Command")
            .setDescription(Rin.Cmd.get("help").description)
            .addFields({
                name: "Basic Commands", 
                value: "`help`", 
                inline: true
            }, {
                name: "Image Commands",
                value: "`randomdanbooru`, `randomneko`, `randomnekogif`",
                inline: true
            }, {
                name: "Dev Command",
                value: "`test`",
                inline: false
            })
            Msg.channel.send(HelpEmbed)
        }
    }
}