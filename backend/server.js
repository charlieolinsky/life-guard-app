const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const mysql = require('mysql2');

const server = express();
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json())

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

server.get('/getRandomUsers', async (req, res) => {
    request('https://randomuser.me/api/?results=1', function(error, response, body) {
        if(!error && response.statusCode == 200) {
            
            result = JSON.parse(body)["results"][0];
						const parsedData = [result]
            
            res.send({parsedData});
            console.log("User Sent to Front") 
           
        }
    })
  })

server.post("/insertUser", (req, res) => {
  
  console.log(req.body.firstName)
  res.redirect("http://localhost:3000")

  connection.query(`INSERT INTO users(username, hashPassword, firstName, lastName, picture) VALUES('${req.body.userName}', '${req.body.hashPassword}', '${req.body.firstName}', '${req.body.lastName}', '${req.body.pictureURL}')`, (error, results) => {
      if (error) throw error
      console.log(results)
  })
})

server.post("/selectDepartment", (req, res) => {
    res.redirect("http://localhost:3000")

    connection.query(`SELECT firstName, lastName INTO department FROM users`)
    if (error) throw error
      console.log(results)
})


server.listen(port, () => {
  console.log(`app listening on port ${port}`)
})