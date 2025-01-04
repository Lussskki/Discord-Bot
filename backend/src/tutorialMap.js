const tutorialMap = {    'გამარჯობა, შენ ვინ ხარ': () => {
  return [
          'მე ბოტი ვარ, მასტერს ვემსახურები უბრალოდ. ახლა ჩემზე მუშაობა მიმდინარეობს, მალე შედეგსაც იხილავ.'
  ]
},
    'დამეხმარე ნოუდის სერვერის აწყობა მინდა': () => {
      return [
        '### ეტაპი 1: შექმენი ახალი პროექტი\n' +
        '1. **შექმენი ახალი დირექტორია და გადადი მასში**\n' +
        '   ```bash\n' +
        '   mkdir project\n' +
        '   cd project\n' +
        '   ```\n' +
        '2. **დააინიციალიზაციე პროექტი:**\n' +
        '   ```bash\n' +
        '   npm init -y\n' +
        '   ```\n' +
        '   ეს დააგენერირებს `package.json` ფაილს.',
  
        '### ეტაპი 2: შექმენი სერვერი Node.js-ში\n' +
        '1. **გამოიყენე HTTP მოდული:**\n' +
        '   ```javascript\n' +
        '   const http = require("http");\n' +
        '   const server = http.createServer((req, res) => {\n' +
        '     res.write("Hello World");\n' +
        '     res.end();\n' +
        '   });\n' +
        '   server.listen(3000, () => console.log("Server running at http://localhost:3000"));\n' +
        '   ```',
        '2. **ექსპრესის ფრეიმვორკით ხელმძღვანელობა:**\n' +
        '   ```javascript\n' +
        '   import express from "express";\n' +
        '   const app = express();\n' +
        '   app.get("/", (req, res) => res.send("Hello World"));\n' +
        '   app.listen(3000, () => console.log("Server running at http://localhost:3000"));\n' +
        '   ```'
      ]
    },

    'რა ვებ ფრეიმვორკი უნდა დავაინსტალირო, რომ შევქმნა პროექტი?': () => {
      return [
        '1. **ექსპრესის ინსტალაციის დროს:**\n' +
        '   - გაუშვი ეს კოდი რომ დააინსტალირო express:\n' +
        '   ```bash\n' +
        '   npm install express\n' +
        '   ```\n' +
        '   - შექმენი  `server.js` ფაილი და დასტრატე სერვერი.'
      ]
    }
  }
  

  export default tutorialMap