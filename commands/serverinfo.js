const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('GuardianMC')
            .setDescription("GuardianMC is een pretpark server, gebaseerd op Bobbejaanland")
            .setColor("#b58f1b")
            .addFields(
                {name: "**IP**", value: "guardianmc.pnjoin.nl"},
                {name: "**Progressie Bouw**", value: "2%"},
                {name: "**Progressie Techniek**", value: "0%"},
                {name: "**Models Af**", value: "1"}
            )

         

		
        return message.channel.send(botEmbed);



}

module.exports.help = {
    name: "serverinfo"
}