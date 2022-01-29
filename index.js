const express = require('express')
const compression = require('compression')
const https = require('https')
const fs = require('fs')
const app = express()

const options = {
    cert: fs.readFileSync('./full_chain.pem'),
    key: fs.readFileSync('./private.key')
}

app.use(compression())
app.use(express.static('./dist'))

app.listen(80, () => {
    console.log('server running at http://192.168.0.109');
})

/* https.createServer(options, app).listen(443) */