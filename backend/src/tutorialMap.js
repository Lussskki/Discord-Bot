const tutorialMap = {
    'how can i start a server in node.js?': () => {
      return [
        '### Step 1: Create a new project\n' +
        '1. **Create a new directory and navigate into it:**\n' +
        '   ```bash\n' +
        '   mkdir project\n' +
        '   cd project\n' +
        '   ```\n' +
        '2. **Initialize the project:**\n' +
        '   ```bash\n' +
        '   npm init -y\n' +
        '   ```\n' +
        '   This will generate a `package.json` file.',
  
        '### Step 2: Start a server in Node.js\n' +
        '1. **Using HTTP module:**\n' +
        '   ```javascript\n' +
        '   const http = require("http");\n' +
        '   const server = http.createServer((req, res) => {\n' +
        '     res.write("Hello World");\n' +
        '     res.end();\n' +
        '   });\n' +
        '   server.listen(3000, () => console.log("Server running at http://localhost:3000"));\n' +
        '   ```',
        '2. **Using Express framework:**\n' +
        '   ```javascript\n' +
        '   import express from "express";\n' +
        '   const app = express();\n' +
        '   app.get("/", (req, res) => res.send("Hello World"));\n' +
        '   app.listen(3000, () => console.log("Server running at http://localhost:3000"));\n' +
        '   ```',
        '3. **Using Koa framework:**\n' +
        '   ```javascript\n' +
        '   const Koa = require("koa");\n' +
        '   const app = new Koa();\n' +
        '   app.use(async ctx => {\n' +
        '     ctx.body = "Hello World";\n' +
        '   });\n' +
        '   app.listen(3000, () => console.log("Server running at http://localhost:3000"));\n' +
        '   ```',
        'Each method has its own use case. HTTP is basic and doesn’t require extra dependencies, Express is a robust framework with many built-in features, and Koa is a lightweight alternative to Express with a modern approach to middleware.'
      ]
    },

    'what web framework should i install and how to create a project?': () => {
      return [
        '1. **Installing Express framework:**\n' +
        '   - Run the following command to install Express:\n' +
        '   ```bash\n' +
        '   npm install express\n' +
        '   ```\n' +
        '   - Create a new `server.js` file and start the server as shown earlier with Express.',
        '2. **Installing Koa framework:**\n' +
        '   - Install Koa with the following command:\n' +
        '   ```bash\n' +
        '   npm install koa\n' +
        '   ```\n' +
        '   - Then, create a `server.js` and set up your server like the example shown above.',
        '3. **Creating a new Node.js project:**\n' +
        '   - Initialize a new Node.js project using the following command:\n' +
        '   ```bash\n' +
        '   npm init -y\n' +
        '   ```\n' +
        '   - This will generate a `package.json` file where you can manage your dependencies.\n' +
        '   - After that, you can install any web framework (like Express or Koa) and start creating your project.'
      ]
    }
  }
  

  export default tutorialMap