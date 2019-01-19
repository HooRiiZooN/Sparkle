const Discord = require("discord.js");
const {
    get
} = require("snekfetch");
module.exports.run = async (bot, message, args) => {
    try {
        let target;
        if (!args[0]) {
            target = `<@${message.author.id}>`
        } else {
            target = args.join(" ")
        }
        get("https://nekos.life/api/v2/img/poke").then(res => {
            const embed = new Discord.RichEmbed()
                .setImage(res.body.url)
                .setColor("0xFFB6C1")
                .setAuthor(`Pokes!`)
                .setDescription(`**<@${message.author.id}>** Poked ${target}`)
            setTimeout(() => {
                return message.channel.send({
                    embed
                });
            }, 100);
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports.command = {
    name: 'poke',
    aliases: ["pokes"],
    usable: "Users",
    description: "poke someone.",
    usage: ">poke <@USER/ID>",
    category: "Image",
    enabled: true
};