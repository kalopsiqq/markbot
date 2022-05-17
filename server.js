let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({
    activity: {
      name: "Kait was here. !hannahcmds to see commands"
    },
    status: "online"
  });
});

client.on("message", message => {
  if (message.content === "ping") {
    message.channel.send("pong");
    } else if (message.content === "PING") {
    message.channel.send("PONG");
  } else if (message.content === "hannah") {
    let embed = new Discord.MessageEmbed()
      .setTitle("idiot")
      .setDescription(
        "We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling gotta make you understand"
      )
      .setColor("RANDOM")
      .setFooter(
        "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you"
      );    
    } else if (message.content === "!hannahcmds") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Commands")
      .setDescription(
        "Listed below are all of the commands for the bot"
      )
      .setColor("RANDOM")
      .setFooter(
        "ping for ping pong, !party, !kick for mods, !kill, !postmalone for riplee, and !mark"
      );    
  } else if (message.content === "yes") {
    message.channel.send("yessss");
  } else if (message.content === "Ping") {
    message.channel.send("Pong");
  } else if (message.content.toLowerCase() === "haha") {
    message.channel.send("AHAHAHHA");
  } else if (message.content.toLowerCase() === "rude") {
    message.channel.send("omg who tf is being rude im gonna beat them tf up");
    } else if (message.content.toLowerCase() === "food") {
    message.channel.send("Riplee has summoned me");
  } else if (message.content.toLowerCase() === "i love it") {
    message.channel.send("i do too, i enjoy it a lot");
  } else if (message.content.toLowerCase() === "ass") {
    message.channel.send("ass is quite good");
    } else if (message.content.toLowerCase() === "vodka") {
    message.channel.send("don't be an alcoholic");
      } else if (message.content.toLowerCase() === "clown") {
    message.channel.send("clowns are hot");
  } else if (message.content === "Yes") {
    message.channel.send("YAAAA BABY");
  } else if (message.content === "YES") {
    message.channel.send("YESSS");
  } else if (message.content.startsWith("!party")) {
    let partygoer = message.mentions.users.first();
    if (!partygoer) {
      message.reply("Mention someone to party with");
    } else {
      message.channel.send(`${partygoer} had fun at the party!`);
    }
  } else if (message.content.startsWith("!kick")) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      let member = message.mentions.members.first();
      if (!member) {
        message.channel.send("Please mention someone");
      } else {
        member.kick().then(mem => {
          message.channel.send(`Kicked ${mem.user.username}!`);
        });
      }
    }
  } else if (message.content.startsWith("!kill")) {
    let victim = message.mentions.users.first();
    if (!victim) {
      message.reply("Mention someone to kill");
    } else {
      message.channel.send(`${victim} died lmao`);
    }
  }
  if (message.content === "!postmalone") {
    let post = [
      "https://cdn.discordapp.com/attachments/738163755673976973/868295009579974666/posty.jpg",
      "https://cdn.discordapp.com/attachments/665726908406693908/868294754205597716/original.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868296204088401941/Pictured-Post-Malone.png",
      "https://cdn.discordapp.com/attachments/646378005689532428/868296375329251368/unknown.png",
      "https://cdn.discordapp.com/attachments/646378005689532428/868296701692235836/unknown.png",
      "https://cdn.discordapp.com/attachments/819269643565793393/868296889915813948/images.png",
      "https://cdn.discordapp.com/attachments/738163755673976973/868297156660965467/Tylah-Yaweh-Post-Malone.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868297305462300682/post-malone-crocs-5.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868297560194957423/618e6dd0de078b2360046bb614f9d0ea.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868297728927608862/60443AD2_754F_46D8_A17E_6CE5214ED36A.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868297939569754132/post-malone-circles-stream-feat.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868298366415687760/unknown.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868298508820684891/ab62e22eb4369ff5cd18104e382b09d8.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868298646456787054/saint-tropez-post-malone-2.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868298732960104448/unknown.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868298934144102430/GettyImages-669248174_cyarj1.png",
      "https://cdn.discordapp.com/attachments/665726908406693908/868299006776836166/unknown.png"
    ];
    message.channel.send(
      `${post[Math.floor(Math.random() * post.length)]} most palone, toasty my posty`
    );
  }
  if (message.content === "!mark") {
    let image = new Discord.MessageAttachment(
      "https://media.discordapp.net/attachments/601556626184470541/840009144182374410/2Q.png",
      "markimoo.jpg"
    );
    message.channel.send(image);
  }
});
client.login("ODMzNDY2ODQyNjI5OTMxMDI4.YHywfA.T1GU-FPMQddDDESM5vY_R3ogRTM");
