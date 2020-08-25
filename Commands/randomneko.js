const Discord = require("discord.js")
const NekosLife = require("nekos.life")
const Nekos = new NekosLife()

module.exports = {
    name: "randomneko",
    helpname: "Random Neko",
    description: "Show random neko image",
    usage: "rin>randomneko",
    alias: ["neko"],
    alternatedescription: "Show random neko image",
    run: async(Rin, Msg, Arguments) => {
        Msg.channel.startTyping()
        const NekoImg = await Nekos.sfw.neko()
        const NekoEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription("Here's your random neko! Nyan!")
        .setImage(NekoImg.url)
        .setFooter("Using Nekos.life API")
        Msg.channel.send(NekoEmbed)
        Msg.channel.stopTyping(true)
    }
}