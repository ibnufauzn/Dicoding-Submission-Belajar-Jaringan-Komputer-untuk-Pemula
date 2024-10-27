'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()

// [ROUTE] '/' => Response: 'Hello world!'
app.get('/', (req, res) => {
    res.send('Hello world!\n')
})

// [ROUTE] '/me' => Response: 'dicoding_ibnufauzan'
app.get('/me', (req, res) => {
    res.send('dicoding_ibnufauzan')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
