const Discord = require("discord.js");
const { get } = require("snekfetch");
module.exports.run = async (bot,message,args) => { 
    try {
         get("http://aws.random.cat/meow").then(res => {
            const embed = new Discord.RichEmbed()
            .setImage(res.body.file)
            .setColor("0xFFB6C1")
            .setAuthor(`${message.author.username} the cat!`)

            setTimeout(() => {
                return  message.channel.send({embed});
            }, 100);
        });
    } catch(err) {
        console.log(err);
    }
}

module.exports.command = {
name: 'cat',
aliases: ["meow"],
usable: "Users",
description: "Send a cat image.",
usage: ">cat",
category: "Image",
enabled: true
};