const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.on("ready", () => {
    console.log("I am ready!");
  });



client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
    if (message.content.startsWith("https://steemit.com")) {
        message.reply("Please use Utopian.io links only!")
        message.delete();
      
      
    }
  
});

client.login(config.token);