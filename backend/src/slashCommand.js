import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { SlashCommandBuilder } from '@discordjs/builders'

// Define slash commands
export const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with Answer'),
  new SlashCommandBuilder().setName('hell').setDescription('Replies with Answer')
].map(command => command.toJSON())

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


