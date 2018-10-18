const AllwaiDiamondCodes = ['498630971562917888' , '195088897234042880'];
client.on('message', message => {
var prefix = "?";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!AllwaiDiamondCodes.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command === "say")  {
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
if (command == "emb")    {
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }
});
