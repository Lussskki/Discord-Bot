# **Discord Bot Project**

## **Overview**

This is a **Work-In-Progress (WIP)** Discord bot template project. The bot provides tutorials and error handling related to Node.js topics. The project is actively being developed, and new features and improvements will be added over time.

## **Features**

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
2. Create .env file in the root directory and add discord token
   ```bash
   DISCORD_TOKEN=your-bot-token 

## **How to add commands**

To add new commands, update the `tutorialMap.js` or `errorMap.js` files. Add the question as a key and the response as a value in the respective map. Restart the server to apply changes.

```javascript
const tutorialMap = {
  'how to create a new project': () => [
    '1. Create a new directory:',
    '   ```bash\n   mkdir project-name\n   cd project-name\n   ```',
    '2. Initialize the project with npm or pnpm:',
    '   ```bash\n   pnpm init\n   ```'
  ]
}

```

## **How to add slashCommands / **

To add new slash commands, update `slashCommand.js` and `index.js` files. Add slashes for more functionality. 

# In src/shlasCommand.js
Replace text in  `setName('ping')` and add new code: 
```javascript 
new SlashCommandBuilder().setName('ping').setDescription('Replies with Answer') 
``` 
in map. In index write Title what you want name to execute in discord.

### **Contributing**

Contributions are welcome! Fork the repository, make changes, and create a pull request.

### **Notes**
- **This is a WIP project, so the codebase may change frequently.**
- **Ensure you have the necessary permissions to test the bot on a Discord server.**
- **Feel free to copy and paste this into your `README.md`**
