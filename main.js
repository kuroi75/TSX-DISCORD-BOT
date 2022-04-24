const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { token } = require('./config.json');
const { MessageEmbed } = require('discord.js');
const prefix = "TSX";
const fs = require('fs');
const command = require('./commands/command');
client.command = new Discord.Collection();
const commandsFile = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
for(const file of commandsFile){
    const command = require(`./commands/${file}`);
    // client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('TSX bot is online')
});



client.on('message', message =>{
    if(command === 'TSX RULES'){
        client.command.get('command').execute(message, args, Discord);
        message.channel.send(newEmbed);
    }
});

client.on('message', message =>{
    if(message.content === 'TSX rules'){
        message.reply("**  TSX SERVER RULES** \r \n 📌 **Be respectful** \n 📌 **Sending/Linking any harmful material such as viruses, IP grabbers or harm ware results in an immediate and permanent ban.** \n 📌 **Try to use proper grammar, spelling and don't spam. (Optional)** \n 📌 **Usage of excessive inappropriate language, being racist or sexist towards someone who isn't comfortable with you is prohibited.** \n 📌** Act civil in Voice Chat.** \n 📌 **Post content in the correct channels.** \n 📌 **Don't post someone's personal information without permission.** \n 📌 **You are only allowed to promote your stream or content in the respective channels once every 12 hours.** \n 📌 **If anyone doesn't have a mic, he is allowed to use the tts-bot but he has to dm any of the admin or mod first for permission.** \n 📌 **Listen to what the Staffs say.** \r \n ||for any help or info you can knock ours admin. (type: TSX admin help)||");
    }
});

client.on('message', message =>{
    if(message.content === 'TSX discord link'){
        message.channel.send('https://discord.gg/umqcTGsV7e');
    }
});

client.on('message', message =>{
    if(message.content === 'TSX Founder'){
        message.channel.send('<@592346723234349066>');
    }
});

client.on('message', message =>{
    if(message.content === 'TSX Owner'){
        message.channel.send('<@592346723234349066>');
    }
});

client.on('message', message =>{
    if(message.content === 'TSX social'){
        message.reply(" **Facebook:** https://www.facebook.com/TeamScoriaX \n **Instagram:** https://www.instagram.com/teamscoriax \n **Youtube:** https://www.youtube.com/channel/UCPtKYJVMJNyy81PDr7hguUg \n **Twitter:** https://twitter.com/x_scoria ");
    }
});

client.on('message', message =>{
    if(message.content === 'TSX admin help'){
        message.reply("Please knock <@549869299775307777> or <@365687071547064322>");
    }
});

client.on('message', message =>{
    if(message.content === 'TSX info'){
        message.reply("**We, Team Scoria-X are a Bangladeshi E-Sports Team which started its journey in 21 March 2020. We started with a dream which leads to be the Best Gaming Organization in Bangladesh. We wanted to represent our country in the global e-sports and despite our players talents. And the dream is now a goal, a mission to represent Bangladesh in the International E-sports Level.**");
    }
});

client.on('message', message =>{
    if(message.content === 'TSX bot ping'){
        message.channel.send('TSX BOT Ping is....:robot:').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`<@952082586329567232>🤖BOT Ping is ${ping} ms`);
        })
    }
});

const Nword = 'nitro'
client.on('message', message => {
    if(message.content.toLowerCase().includes(Nword)) { 
    message.delete();
  }
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cashe.find(role => role.name === 'TSX | Community')
    guildMember.role.add(welcomeRole)
});

client.login(token)