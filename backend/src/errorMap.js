const errorMap = {
    'how can i handle errors in node.js': () => {
        return [
          '1. **Using try-catch for synchronous errors:**\n' +
          '   ```javascript\n' +
          '   try {\n' +
          '     const result = someFunction();\n' +
          '   } catch (error) {\n' +
          '     console.error("Error occurred:", error);\n' +
          '   }\n' +
          '   ```',
          '2. **Handling asynchronous errors with Promises:**\n' +
          '   ```javascript\n' +
          '   someAsyncFunction().catch(error => {\n' +
          '     console.error("Async error:", error);\n' +
          '   });\n' +
          '   ```',
          '3. **Using process.on("uncaughtException"):**\n' +
          '   ```javascript\n' +
          '   process.on("uncaughtException", (error) => {\n' +
          '     console.error("Uncaught exception:", error);\n' +
          '   });\n' +
          '   ```'
        ]
      }
}

export default errorMap