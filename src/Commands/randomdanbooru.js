const Discord = require("discord.js")
const Superagent = require("superagent")

module.exports = {
    name: "randomdanbooru",
    helpname: "Random Danbooru",
    description: "Show random danbooru image",
    usage: "rin>danbooru",
    alias: ["dbooru", "danbooru"],
    alternatedescription: "Show random danbooru image",
    run: async(Rin, Msg, Arguments) => {
        if(!Msg.channel.nsfw) return Msg.channel.send("This channel is not nsfw channel");
        Msg.channel.startTyping()
        const { body } = await Superagent.get("https://danbooru.donmai.us/posts/random.json")
        const DanbooruEmbed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Random danbooru image")
        .setDescription("Here's your random danbooru image! >////<")
        .addFields({
            name: "Tags",
            value: "`" + body.tag_string + "`",
            inline: true
        }, {
            name: "Image Properties",
            value: "Height: " + body.image_height + "\nWidth: " + body.image_width + "\nRating: " + body.rating,
            inline: true
        })
        .setImage(body.large_file_url)
        .setFooter("Using Danbooru.donmai.us API")
        Msg.channel.send(DanbooruEmbed)
        Msg.channel.stopTyping(true)
    }
}