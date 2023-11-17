const express = require('express')
const app = express()

app.get('/gadgets', async (req, resp) => {
  resp.sendFile('./gadgets.html', {root: __dirname})
})

app.listen(3000, () => {
  console.log("I'm running you dumb ****")
})
module.exports = app
