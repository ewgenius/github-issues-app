const path = require('path')
const express = require('express')
const request = require('request-promise')

const PORT = process.env.PORT || 3000
const API_HOST = 'https://api.github.com'

const app = express()
app.use(express.static(path.resolve('./build/')))

app.get('/test', (req, res) => res.send('test'))

function callApi(endpoint) {
  const token = `access_token=${process.env.ACCESS_TOKEN}`
  const url = endpoint + (endpoint.indexOf('?') === -1 ?  '?' : '&') + token
  console.log(url)
  return request({
    uri: `${API_HOST}${url}`,
    headers: {
      'User-Agent': 'ewgenius'
    }
  })
    .then(result => JSON.parse(result.trim()))
}

app.get('/*', (req, res) => {
  return callApi(`${req.originalUrl}`)
    .then(response => res.send(response))
    .catch(error => {
      res
        .status(error.statusCode)
        .send(error.message)
    })
})

const server = app.listen(PORT, () => {
  console.log(`server hosted at ${server.address().port}`)
})
