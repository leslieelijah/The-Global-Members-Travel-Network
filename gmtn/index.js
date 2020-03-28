import express from 'express';
import cors from 'cors';
import routes from './src/routes/gmtnRoutes';
// import mongoose, { Mongoose } from 'mongoose';
import bodyParser from 'body-parser';
// import mysqlx from '@mysql/xdevapi';
import mysql from 'mysql';
// import AWS from 'aws-sdk';

const app = express();
const PORT = 4000;

const dbConnString = {
    // Local connection
    host: "localhost",
    user: "root",
    password: "135@Mysql",
    database:"gmtndb"
  
    // AWS connection
    // host:'membersnetwork.c5fk6a6fr7id.us-east-2.rds.amazonaws.com', 
    // port:3306,
    // database:'membersnetwork',
    // username:'network',
    // password:'135Kolo83'
   
    // Afrihost connection
    // host:"sugarman.aserv.co.za",
    // port:2031,
    // user:"mahasuah_gmtn",
    // password:"wmolOZ44KkXj",
    // database:'mahasuah_gmtndb'
}

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbConnString);

  connection.connect(function(err) {
    if(err) {   
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log('You are connected to MySQL DB!');
    }
  });

  // connection.on('error', function(err) {
  //   console.log('db error', err);
  //   if(err.code === 'PROTOCOL_CONNECTION_LOST') {
  //     handleDisconnect(); 
  //   } else {                                     
  //     throw err;                                  
  //   }
  // });
}

handleDisconnect();

// body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);
// routes(app);

// app.get('/social', (req, res) => {
//     console.log(req);
//     connection.query('SELECT * FROM social', (error, result, field) => {
//         if (err) throw err;
//         res.end(JSON.stringify(result));
//     })
// });

// app.post('/social', (req, res) => {
//   let firstName = req.body.firstName;
//   let lastName = req.body.lastName;
//   let interest = req.body.interest;
//   let location = req.body.location;
//   let phone = req.body.phone;
//   let email = req.body.email;
//   let typeOfComunication = req.body.typeOfComunication;
//   let city = req.body.city;
//   let zipCode = req.body.zipCode;
//   let address = req.body.address;
//   let address1 = req.body.address1;

//   connection.connect(function(err){
//     if (err) throw err;

//     let sqlQuery = "INSERT INTO social ('firstname', 'lastName', 'interest', 'location', 'phone', 'email', 'typeOfComunication', 'city', 'zipCode', 'address', 'address1') VALUES ('"+firstName+"','"+lastName+"', '"+interest+"', '"+location+"', '"+phone+"', '"+email+"', '"+typeOfComunication+"', '"+city+"', '"+zipCode+"', '"+address+"', '"+address1+"')";

//     connection.query(sqlQuery, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//        res.end();
//     });

//   })
  
// })

// app.post('/social', function (req, res) {
//   var postData  = req.body;
//   connection.query('INSERT INTO social SET ?', postData, function (error, results, fields) {
//    if (error) throw error;
//    res.end(JSON.stringify(results));
//  });
// });

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
});
