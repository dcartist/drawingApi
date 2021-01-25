// const serverless = require('serverless-http');
const express = require('express')
const cors = require('cors')
const app = express()
const parser = require('body-parser')
const artworkController = require('./controllers/artworks')

// app.use(express.json());
app.use(cors())
// app.use(parser.urlencoded({ extended: true }))
app.use(parser.json({ limit: '20mb' }))
app.use(parser.urlencoded({ extended: true, limit: '20mb' }));
app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.use('/api/artwork', artworkController)

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
    console.log(`http://localhost:${app.get("port")}`)
});