import { Client, GatewayIntentBits } from 'discord.js'

import nodeMap from './slashCommands/nodeMap.js'
import errorMap from './slashCommands/errorMap.js'
import { registerSlashCommands } from './slashCommands/slashCommand.js'

import dotenv from 'dotenv'

dotenv.config() // Load environment variables from .env file

const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID
const token = process.env.DISCORD_TOKEN

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
})

// For log in 
client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`)

  // Register slash commands
  await registerSlashCommands(clientId, guildId, token)
})
// Slash command handler
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction

  //console.log('command: ', commandName)

  // Check which map contains the command
  const getAnswer = nodeMap[commandName] || errorMap[commandName]

  if (typeof getAnswer === 'function') {
    // Get the response and join it into a single string
    const answer = getAnswer().join('\n')

    //console.log('answer: ', answer)
    // Send the answer as a reply
    await interaction.reply(answer)
  } else {
    // Handle cases where the command doesn't exist
    console.log('Command not found')
    await interaction.reply('Sorry, I don’t know how to respond to that command.')
  }
})

// Use your environment variable for the bot token
client.login(token)
