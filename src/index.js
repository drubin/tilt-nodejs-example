const express = require('express')
const app = express()
const port = 3000

//asdfasd
app.get('/', (req, res) => res.send('Hello world!'))

// Health check
app.get('/ping', (req, res) => res.send('OK'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))