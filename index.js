const serverless = require('serverless-http');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
    console.log(`http://localhost:${app.get("port")}`)
});