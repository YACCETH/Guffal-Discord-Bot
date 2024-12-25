const Discord = require('discord.js');
const config = require('./config.json');
require('dotenv').config();

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Guffal Bot is online!');
});

client.on('messageCreate', message => {
    if (message.content.startsWith(config.prefix)) {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        switch(command) {
            case 'trivia':
                // Trivia game logic
                break;
            case 'quest':
                // Knight's Quest game logic
                break;
            case 'siege':
                // Siege Defense game logic
                break;
            case 'song':
                // Minstrel's Song game logic
                break;
            default:
                message.channel.send('Unknown command. Try !help for more information.');
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
