import { Client, GatewayIntentBits } from 'discord.js'
import tutorialMap from './tutorialMap.js'
import { config } from './config.js'
import errorMap from './errorMap.js'

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
})

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', message => {
  if (message.author.bot) return

  const question = message.content.toLowerCase().trim()
  
  // Fetch responses
  const answer = tutorialMap[question] && tutorialMap[question]()
  const errorResponse = errorMap[question] && errorMap[question]()

  // Respond to errors first
  if (errorResponse) {
    if (Array.isArray(errorResponse)) {
      return message.reply(errorResponse.join('\n\n'))
    } else {
      return message.reply('Sorry, something went wrong. The error message format is incorrect.')
    }
  }

  // Respond to tutorial queries
  if (answer) {
    if (Array.isArray(answer)) {
      return message.reply(answer.join('\n\n'))
    } else {
      return message.reply('Sorry, something went wrong. The answer format is incorrect.')
    }
  }

  // Default response for unrecognized questions
  message.reply('Sorry, I don’t recognize that question. Please ask about Node.js topics or errors.')
})

// Use your environment variable for the bot token
client.login(process.env.DISCORD_TOKEN)
