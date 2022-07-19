const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getRandomUsers', (req, res) => {
    request('https://randomuser.me/api/?results=1', function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var parsedBody = JSON.parse(body)
            var userInfo = parsedBody["results"]
            res.send({userInfo}); 
           
        }
    })
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})