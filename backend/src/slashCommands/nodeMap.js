const nodeMap = {   sayhello: () => {
  return [
`Hello, I'm Botzilla, Please note that you can only communicate with me using slashes,
i can help you with node.js tasks and errors, 
currently working on it and you'll see the results in the near future.`
        ]
      },
      createnodeapp: () => {
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
      createnoderoute: () => {
        return [
          '### Step 1: Create `routes` Folder and `routes.js` File\n' +
          '1. **Create a `routes` folder** in your project directory and add a `routes.js` file inside it:\n' +
          '   ```bash\n' +
          '   mkdir routes\n' +
          '   touch routes/routes.js\n' +
          '   ```\n' +
          
          '2. **Define routes in `routes/routes.js`:**\n' +
          '   ```javascript\n' +
          '   import express from "express";\n' +
          '   const router = express.Router();\n' +
          '   router.get("/", (req, res) => {\n' +
          '     res.send("Hello, this is the root route!");\n' +
          '   });' +
          '   export default router;\n' +
          '   ```\n' +
          '   This file defines the routes that will be used in your main application.\n' +
        
          '### Step 2: Implement Routes in `app.js`\n' +
          '1. **In your `app.js` file, import and use the route from the `routes` folder**:\n' +
          '   ```javascript\n' +
          '   import express from "express";\n' +
          '   import route from "./routes/routes.js";\n' +
          '   const app = express();\n' +
          '   app.use("/", route);  // Connect the routes defined in routes.js\n' +
          '   app.listen(3000, () => {\n' +
          '     console.log("Server running at http://localhost:3000");\n' +
          '   });\n' +
          '   ```\n' +
          '   This will allow the routes from `routes/routes.js` to be accessible in your main app.\n'
        ]
      }
      
      
  }
      
      
      
      
      
  
  

  export default nodeMap