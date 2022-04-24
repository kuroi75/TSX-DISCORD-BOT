module.exports = {
    name: 'command',
    description: "Embeds",
    execute(message, arg, Discord){
        const newEmbed = new Discord.messageEmbed()
        .setColor('#F1C40F')
        .setTitel('TSX SERVER RULES')
        .setDescription("This is TSX Server Rules")
        .addFild(
           {name: 'RULE 1', velue: ':pin:Be respectful'},
           {name: 'RULE 2', velue: ':pin:Sending/Linking any harmful material such as viruses, IP grabbers or harm ware results in an immediate and permanent ban.'},
           {name: 'RULE 3', velue: ":pin:Try to use proper grammar, spelling and don't spam. (Optional) "},
           {name: 'RULE 4', velue: ":pin:Usage of excessive inappropriate language, being racist or sexist towards someone who isn't comfortable with you is prohibited."},
           {name: 'RULE 5', velue: ":pin:Don't post someone's personal information without permission."},
           {name: 'RULE 6', velue: ':pin:Post content in the correct channels.'},
           {name: 'RULE 7', velue: ':pin:Mentioning @everyone, the Moderators or a specific person without proper reason is prohibited.'},
           {name: 'RULE 8', velue: ':pin:You are only allowed to promote your stream or content in the respective channels once every 2 hours.'},

        )
        .setImage('')
        .setFooter('')
        message.channel.send(newEmbed);
    }
}