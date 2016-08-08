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
  return request({
    uri: `${API_HOST}${url}`,
    headers: {
      'User-Agent': 'ewgenius'
    },
    transform: (body, response) => {
      return {
        body: JSON.parse(body.trim()),
        headers: response.headers
      }
    }
  })
}

app.get('/*', (req, res) => {
  return callApi(`${req.originalUrl}`)
    .then(response => {
      Object.keys(response.headers).forEach(header => {
        res.setHeader(header, response.headers[header])
      })
      res.send(response.body)
    })
    .catch(error => {
      res
        .status(error.statusCode)
        .send(error.message)
    })
})

const server = app.listen(PORT, () => {
  console.log(`server hosted at ${server.address().port}`)
})
