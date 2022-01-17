const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMyNjAwNTU3OTY3OTEyOTgw.YeVV8w.Gwp4lWN6yzOagIH2dFJ4cwBRwOY"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
}) 

client.on("ready", () => {
    console.log(`Botten er oppe`)
})

client.on("messageCreate", (message) => {
    if (message.content == "godmorgen"){
        message.reply("godmorgen håber du har sovet godt")
    }
})

client.login(process.env.TOKEN)