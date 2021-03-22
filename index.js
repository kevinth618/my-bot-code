const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hello boi")
})

app.listen(3000, () => {
  console.log("Project is ready")
})
let Discord = require("discord.js");
let client = new Discord.Client();

client.on('ready', () => {
 client.user.setActivity('oggy/help', { type: 'LISTENING' })
})
client.on("message", message => {
if (message.content === "oggy/lol") {
message.channel.send("lmao")
}
if(message.content === "oggy/help") {
 let embed = new Discord.MessageEmbed()
 .setTitle("copy your words")
 .setDescription(":oggy/say ")
 .setColor("RANDOM")
 .setFooter("lol")
 message.channel.send(embed)
}
if (message.content.startsWith("oggy/kick")) {
 if (message.member.hasPermission("♖♦  𝐦𝐚ℕ€𝐠Ⓔ𝓡  ☆✎")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
}
if(message.content.startsWith(`oggy/dm`)){
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
}
if(message.content.startsWith('oggy/say')){
 const whattosay = message.content.slice("".length).trim().split(/ +/);
whattosay.shift().toLowerCase().split(" ")[0]
message.channel.send(whattosay.join(" "))
}
if (message.content === 'have a nice day') {
 message.react(':pls:');
}
if(message.content === "oggy/help") {
 let embed = new Discord.MessageEmbed()
 .setTitle("dm yo freind in my acount")
 .setDescription(": oggy/dm (mention someone and write message")
 .setColor("RANDOM")
 .setFooter("be gone thot")
 message.channel.send(embed)
}
if(message.content === "oggy/help") {
 let embed = new Discord.MessageEmbed()
 .setTitle("kick someone")
 .setDescription(" :oggy/kick")
 .setColor("RANDOM")
 .setFooter("only maneger can kick")
 message.channel.send(embed)
}
if(message.content.toLowerCase().startsWith("oggy/whois")) {
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let e = new Discord.MessageEmbed()
.setColor("#C724B1")
.setTimestamp()
.addFields({
name: "User Joined Server At",
value: member.joinedAt
}, {
name: "User Created At",
value: user.createdAt
}, {
name: "User Name & Tag",
value: user.tag
}, {
name: "User ID",
value: user.id
})
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send(e);
};
})
client.on("guildMemberAdd", member => {
const myServer = "your server id here"; 
const welcomeChannel = "welcome";
 if(member.guild.id === myServer) {
 client.channels.cache.get(welcomeChannel).send(`Welcome ${member}! enjoy our server`)
 }
})
client.on("message", message => {
  
if(message.content === "oggy/serverinfo") {
 let embed = new Discord.MessageEmbed()
 .setColor("WHITE")
 .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
 .addField("Owner", message.guild.owner, true)
 .addField("Channels", message.guild.channels.cache.size, true)
 .addField("Roles", message.guild.roles.cache.size, true)
 .addField("Emojis", message.guild.emojis.cache.size, true)
 .addField("Verification Level", message.guild.verificationLevel, true)
 .addField("Region", `${message.guild.region}`, true)
 .addField("Members", `Total: ${message.guild.members.cache.size} | Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size} | Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setFooter(`ID: ${message.guild.id}, Created • ${message.guild.createdAt.toDateString()}`)

 message.channel.send(embed)
}
if(message.content === "oggy/serverinfo") {
  message.channel.send("thank u")
}
if(message.content.startsWith(">?!warn")) {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("mention someone to warn.")
 else {
 let embed = new Discord.MessageEmbed()
 .setTitle("Warnings")
 .setDescription(`${victim} got warned by ${message.author}!`)
 .setColor("RANDOM")
 .setFooter(`Moderater : ${message.author.username}`)
 .setTimestamp()
 
 message.channel.send(embed)
 }
}
})

client.login("your bot token here")
