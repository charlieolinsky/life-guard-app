const express = require('express')
const cors = require('cors')
const request = require('request')
const bodyParser = require('body-parser')
const mysql = require('mysql2');

const server = express();
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json())
server.use(cors())

const port = 5000;

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'myfirstdatabase'
})
db.connect();

server.get('/', (req, res) => {
  res.send('Backend Running')
})

server.post("/addEmployee", (req, res) => {
  //console.log('addEmployee Called')
  const name = req.body.name; 
  const email = req.body.email; 
  const phone = req.body.phone;
  const position = req.body.position;
  const salary = req.body.salary; 

  db.query('INSERT INTO employees(name, email, phone, position, salary) VALUES(?,?,?,?,?)', [name, email, phone, position, salary], (err, result) => {
    if(err){
      console.log(err)
    }
    else{
      res.send("User added to SQL Table")
    }
  })

})

// server.get('/getRandomUsers', (req, res) => {
//     request('https://randomuser.me/api/?results=1', function(error, response, body) {
//         if(!error && response.statusCode == 200) {
            
//             result = JSON.parse(body)["results"][0];
// 						const parsedData = [result]
            
//             res.send({parsedData});
//             //console.log("User Sent to Front") 
           
//         }
//     })
//   })

server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})