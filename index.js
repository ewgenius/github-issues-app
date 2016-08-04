const path = require('path')
const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.static(path.resolve('./build/')))

app.get('/test', (req, res) => res.send('test'))

app.get('/api/')

const server = app.listen(PORT, () => {
  console.log(`server hosted at ${server.address().port}`)
})