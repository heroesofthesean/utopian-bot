# utopian-bot
This is a bot I made for the Utopian.io Discord server. 
The idea is that the bot looks user's messages, and when the message starts with "https://steemit.com" it will delete the message, and mention the user saying "Please use Utopian.io links only!"

You should note that this is the first time I ever made a Discord bot and that I'm not an experienced coder. I'm sure there are a lot of people who could make something that looks better or neater, but I searched for a bot that could do this and didn't find any. 

Here's a video of the bot doing it's thing: https://youtu.be/BNdmVhAtzmc

The bot requires discord.js and the Discord Client. 

To get the bot to work:<br>
You'll need to create a discord bot account on the [discordapp.com Applications Page](https://discordapp.com/developers/applications/me).<BR> <BR>
The bot looks for a Bot token in the `utopianconfig.json` file, so make sure you copy the bot's token!<BR> <BR>
Go to the `utopianconfig.json` file and past the bot token where it says "Bot_Token_Here". <BR> <BR>
  We're going to make a `package.json` file now, by running `npm init -y` in a command window. <BR><BR>
Next, make sure to get `discord.js` into the folder for the bot with the following line: `npm i -S discord.js` <BR> <BR>
Right now there should be the following things in your folder: a folder called "node_modules", a json file called "utopianconfig" and the "utopianmod" file. <BR> <BR>
In the CLI (which should still be in your project folder) type the following command: `node utopianmod.js`. <BR> <BR>
If everything went right, you should get a message saying "I am ready!" <BR> <BR>
For the bot to be able to delete messages it will need the `manage messages` permission in Discord. <BR> <BR>
To make sure that it doesn't look for messages everywhere, it should only be made to view messages in the channels you want the bot to work in (now we're getting to my inexperience, because there's probably a way to code that). 
  <BR> <BR>
    There's also the issue of keeping the bot online, which right now will only be as long as your CLI is running.
