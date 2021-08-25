// mock cdn
const express = require('express')
const path = require('path')

const app = express()
const port = 8088

app.use(express.static('dist'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})