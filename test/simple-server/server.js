const express = require('express')
const app = express()
const data = require('./data.json')


app.get(`/data`, (req, res) => {
  res.send(data)
})
app.listen(process.env.PORT || 3000)