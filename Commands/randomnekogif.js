const Discord = require("discord.js")
const NekosLife = require("nekos.life")
const Nekos = new NekosLife()

module.exports = {
    name: "randomnekogif",
    helpname: "Random Neko GIF",
    description: "Show random neko GIF image",
    usage: "rin>randomnekogif",
    alias: ["nekogif"],
    alternatedescription: "Show random neko GIF image",
    run: async(Rin, Msg, Arguments) => {
        Msg.channel.startTyping()
        const NekoGifImg = await Nekos.sfw.nekoGif()
        const NekoGifEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription("Here's your random neko GIF! Nyan!")
        .setImage(NekoGifImg.url)
        .setFooter("Using Nekos.life API")
        Msg.channel.send(NekoGifEmbed)
        Msg.channel.stopTyping(true)
    }
}