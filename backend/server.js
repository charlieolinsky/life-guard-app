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
            //console.log("User Sent to Front") 
           
        }
    })
  })

server.post("/insertUser", (req, res) => {
  
  res.redirect("http://localhost:3000/Home")
  
  //Insert User
  console.log("User Called")
  connection.query(`INSERT INTO users(username, hashPassword, firstName, lastName, picture) VALUES('${req.body.userName}', '${req.body.hashPassword}', '${req.body.firstName}', '${req.body.lastName}', '${req.body.pictureURL}')`, (error, results) => {
    if (error) throw error
  })
  //Add User Department
  console.log("Department Called")
  connection.query(`INSERT INTO department (${req.body.department}) VALUES('${req.body.firstName+' '+req.body.lastName}')`, (error, results) => {
    if (error) throw error
  })
      
})

server.post("/getUser", (req, res) => {
    
    if (error) throw error
      console.log(results)
})


server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})