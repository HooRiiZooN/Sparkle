const Discord = require("discord.js");
const {
    get
} = require("snekfetch");
module.exports.run = async (bot, message, args) => {
    let random = Math.floor(Math.random() * 11);
    var attachment;
    if (random < 5) {
        attachment = 'https://cdn.discordapp.com/attachments/522805797185388554/523210408455176202/image0.jpg'
    } else {
        attachment = 'https://cdn.discordapp.com/attachments/525076308145864705/526031315888504857/200w.gif'
    }
    let embed = new Discord.RichEmbed()
        .setImage(attachment)
    message.channel.send(embed);
}

module.exports.command = {
    name: 'mark',
    aliases: ["eatthatgoodstuff"],
    usable: "Users",
    description: "Mark's special command.",
    usage: ">>mark",
    category: "Image",
    enabled: true
};