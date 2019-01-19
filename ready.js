module.exports = async bot => {
    bot.user.setActivity("Netflix!", {
        type: "WATCHING"
    });
    const {
        get
    } = require("snekfetch");
    await get(`http://artii.herokuapp.com/make?text=SPARKLE++IS++READY&font=big`).then(res => {
        console.log(res.body.toString())
    });
const Discord = require('discord.js');
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var event = new Date();
    let embed = new Discord.RichEmbed()
    .setAuthor('Sparkle is Ready!', 'https://img.icons8.com/cotton/2x/checkmark.png')
    .setColor('0x659EC7')
    .setThumbnail(bot.user.displayAvatarURL)
    .setFooter(event.toLocaleDateString('eng-GB', options))
    .setDescription(`**Users:** ${bot.users.size}\n**Servers:** ${bot.guilds.size}\n${bot.guilds.map(x => "° "+ x.name).join("\n")}\n\n**Channels:** ${bot.channels.size}\n**Commands:** ${bot.commands.map(x => x.command).length}`)
    
bot.channels.get("532942584625233940").send(embed)
};