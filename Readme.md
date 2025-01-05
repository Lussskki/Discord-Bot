# **Discord Bot Project**

## **Overview**

This is a **Work-In-Progress (WIP)** Personal Discord bot template project. You can fork this and use for you. The project is actively being developed, and new features and improvements will be added over time.

## **Features**
- **Clean code for client to use.**
- **Responds to Node.js tutorial-related questions.**
- **Provides error handling solutions.**
- **Built using Node.js and Discord.js.**

## **Prerequisites**

- **Node.js (v16.6.0 or later)**
- **A Discord account**
- **A bot token from the Discord Developer Portal**

## **How to Start the Server**

1. Clone the repository:
   ```bash
   git clone https://github.com/Lussskki/Discord-Bot
   cd project
   pnpm i
   pnpm dev
   ```
2. Create .env file in the root directory and add this 
   ```bash
   DISCORD_TOKEN=your-bot-token 
   CLIENT_ID=your-client-id
   GUILD_ID=your-guild-id
   ```

## **How to add slash commands**

To add new commands, update the `tutorialMap.js` or `errorMap.js` files. Add the phrases as a key and the response as a value in the respective map. Restart the server to apply changes.

```javascript
const tutorialMap = {
  sayHello : () => [
    '1. Create a new directory:',
    '   ```bash\n   mkdir project-name\n   cd project-name\n   ```',
    '2. Initialize the project with npm or pnpm:',
    '   ```bash\n   pnpm init\n   ```'
  ]
}

```
## In src/slashCommand.js
Replace text in  `setName('ping')` and add new code: 
```javascript 
new SlashCommandBuilder().setName('ping').setDescription('Replies with Answer') 
``` 
in map. In index write Title what you want name to execute in discord.

### **Contributing**

Contributions are welcome!If you like my project fork the repository, make changes, and create a pull request.

### **Notes**
- **This is a WIP project, so the codebase may change frequently.**
- **Ensure you have the necessary permissions to test the bot on a Discord server.**
- **Feel free to copy and paste this into your `README.md`**
- **It's my personal project for learn more and more, experience myself with more knowledge**
