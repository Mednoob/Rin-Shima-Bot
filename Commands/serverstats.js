const Discord = require("discord.js")

module.exports = {
    name: "serverstats",
    helpname: "Server Stats",
    description: "Show server stats",
    usage: "rin>serverstats",
    alias: ["servstats"],
    alternatedescription: "Show server stats",
    run: async(Rin, Msg, Arguments) => {
        const ServerStatsEmbed = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setTitle(Msg.guild.name + " Server stats")
        .setThumbnail(Msg.guild.iconURL({dynamic: true}))
        .addFields({
            name: "Server Properties",
            value: `Name: ${Msg.guild.name}\nDescription: ${Msg.guild.description}\nCreated at: ${Msg.guild.createdAt}`
        })
    }
}