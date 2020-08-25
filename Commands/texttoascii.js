const Discord = require("discord.js")
const Superagent = require("superagent")

module.exports = {
    name: "texttoascii",
    helpname: "Text to Ascii",
    description: "Convert text to ascii art",
    usage: "rin>ascii",
    alias: ["ascii", "tta"],
    alternatedescription: "Convert text to ascii art",
    run: async(Rin, Msg, Arguments) => {
        if(!Arguments.length) return Msg.channel.send("Please, provide some text!");
        const {text} = await Superagent.get("http://artii.herokuapp.com/make?text=" + Arguments.join(" "))
        Msg.channel.send("```" + text + "```")
        
    }
}