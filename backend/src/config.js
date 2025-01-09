// For secure
import dotenv from 'dotenv'
dotenv.config()


export const config = {
    clientId: process.env.CLIENT_ID,
    guildId: process.env.GUILD_ID,
    token: process.env.DISCORD_TOKEN
}