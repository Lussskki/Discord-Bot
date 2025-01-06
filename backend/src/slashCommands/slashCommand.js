import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { SlashCommandBuilder } from '@discordjs/builders'
import errorMap from './errorMap.js'




// Define slash commands
// Add your SlashCommandBuilder to set

export const commands = [
  new SlashCommandBuilder().setName('sayhello').setDescription('Replies with Answer'),
  new SlashCommandBuilder().setName('error').setDescription('Replies with Answer'),
  new SlashCommandBuilder().setName('createnodeapp').setDescription('Replies with Answer'),
  new SlashCommandBuilder().setName('createnoderoute').setDescription('Replies with Answer')
  
].map(command => {
  const commandName = command.name
  return {
    ...command.toJSON(),
    error: errorMap[commandName] || { code: 999, message: 'Unknown command error' } // Default error if not found
  }
})

// Function to register slash commands
export const registerSlashCommands = async (clientId, guildId, token) => {
  const rest = new REST({ version: '9' }).setToken(token)

  try {
    console.log('Started refreshing application (/) commands')
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    console.log('Successfully reloaded application (/) commands')
  } catch (error) {
    console.error('Error registering slash commands:', error)
  }
}


