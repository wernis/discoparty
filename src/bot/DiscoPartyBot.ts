// import dotenv
import * as dotenv from "dotenv";

// import discord
import * as Discord from "discord.js";

dotenv.config({ path: __dirname+'/.env' });

// class DiscoPartyBot
class DiscoPartyBot {

    // variables
    private discordClient = null;

    // constructor
    public DiscoPartyBot() {
        
    };

    // init
    public async init() {

        this.discordClient = new Discord.Client();

        this.discordClient.on('ready', () => {
            console.log(`Logged in as ${this.discordClient.user.tag}!`);
        });

        this.discordClient.on('message', msg => {
            if (msg.author.bot) return;
            if (msg.content === 'ping') {
                msg.reply('pong');
                msg.channel.send("safe");
            }
        });

        let ss = await this.discordClient.login(process.env.TOKEN);
        
        console.log(ss);
    }

    public async requestTradeKey(msg) {

    }

};

// eport 
export {
    DiscoPartyBot
};