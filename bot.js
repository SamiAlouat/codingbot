const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.on("message",(message => {
    console.log(message.content);
}));


client.login("OTUzNzQ1MDQ5ODIzMzUwNzg3.YjJCSw.W8DO489ByIPPu_BQj9UF3fhbs9Y");