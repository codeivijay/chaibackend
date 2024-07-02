require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Hello twitter")
})

app.get('/login', (req, res) => {
    res.send("<h1> Please Login at chai aur code </h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<p> This is the youtube page of chai aur code </p>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})