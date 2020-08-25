const Discord = require("discord.js")
const nHentai = require("nana-api")
let Nana = new nHentai()

module.exports = {
    name: "nhentai",
    helpname: "NHentai",
    description: "Show random nhentai doujin or show nhentai book based on given arguments",
    usage: "rin>nhentai [Book ID] [Page]",
    alias: ["nh"],
    alternatedescription: "Show random nhentai doujin or show nhentai book based on given arguments",
    run: async(Rin, Msg, Arguments) => {
        if(!Msg.channel.nsfw) return Msg.channel.send({embed: {
            description: ":x: This channel is not nsfw channel! >////<",
            color: "RED"
        }});
        if(!Arguments.length) {
            Nana.random().then(bookobject => {
                Nana.search(bookobject.title.english).then(bookobjectsearchres => {
                const randombookembed = new Discord.MessageEmbed()
                .setColor("BLACK")
                .setTitle("Random NHentai Doujin")
                .setDescription("Here's your random nhentai doujin! >////<")
                .addFields({
                    name: "Doujin Properties",
                    value: `**Doujin ID:** ${bookobject.id}\n**Doujin Title:** ${bookobject.title.pretty}`
                })
                .setImage(bookobjectsearchres.results[0].thumbnail.s)
                .setFooter("Using Nana API")
                Msg.channel.send(randombookembed)
            })})
        }
    }
}
