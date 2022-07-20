const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const mysql = require('mysql2');

const server = express();
const port = 5000;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'paradox',
  database : 'myfirstdatabase'
})
connection.connect();

server.get('/', (req, res) => {
  res.send('Backend Running')
})

server.get('/getRandomUsers', (req, res) => {
    request('https://randomuser.me/api/?results=1', function(error, response, body) {
        if(!error && response.statusCode == 200) {
            
            result = JSON.parse(body)["results"][0];
						const parsedData = [result]
            
            res.send({parsedData});
            console.log("User Sent to Front") 
           
        }
    })
  })

  server.post("/postRandomUser", (req, res) => {
    connection.query(`INSERT INTO users(username, hashPassword, firstName, lastName, pictureURL) VALUES('${req.body.username}', '${req.body.hashPassword}', '${req.body.firstName}', '${req.body.lastName}', '${req.body.pictureURL}')`, (error, results) => {
        if (error) throw error
        console.log(results)
    })
  })


server.listen(port, () => {
  console.log(`app listening on port ${port}`)
})