const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
 
const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});



client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("GuardianMC", { type: "STREAMING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);




 
   // if (command === `${prefix}ip`) {
 
      //  return message.channel.send("guardianmc.pnjoin.nl");
    
   // }

    if (command === `${prefix}serverinfo`) {
		// Embed wat we gaan laten tonen.
        //var botEmbed = new discord.MessageEmbed()
           // .setTitle('GuardianMC')
           // .setDescription("GuardianMC is een pretpark server, gebaseerd op Bobbejaanland")
           // .setColor("#b58f1b")
           // .addFields(
               // {name: "**IP**", value: "guardianmc.pnjoin.nl"},
               // {name: "**Progressie Bouw**", value: "2%"},
               // {name: "**Progressie Techniek**", value: "0%"},
               // {name: "**Models Af**", value: "1"}
         //   )

         

		// Terug sturen van het bericht
       // return message.channel.send(botEmbed);
    }

    // .addFields(
    //     {name:"Bot naam",value: bot.user.username},
    //     {name:"Bot naam",value: bot.user.username}
    // )

   
 
});

bot.login(process.env.token);