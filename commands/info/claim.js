const { MessageEmbed } = require("discord.js");

module.exports = {
   name: "claim",
   aliases: ["verify"],
   category: "info",
   description: "Shows instructions on how to claim your NameMC account.",
   enabled: true,
   run: async (client, message, args) => {
      const embed = new MessageEmbed()
         .setTitle("How To Claim: NameMC")
         .setDescription(`Hey ${message.author.username}, \n` +
            'To claim your NameMC account, please join the minecraft server `blockmania.com` and type `/namemc` when you have connected. \n' +
            '\n' +
            'Please note that joining BlockMania requires you to have a **Premium** Minecraft Account (you must have paid for Minecraft.) \n' +
            `If you cannot run the command /namemc, try joining on regular Minecraft (unmodded vanilla) as sometimes chat settings can be hidden by mods.`)
         .setColor("#90e78d")

      message.channel.send(embed)
   }
}
