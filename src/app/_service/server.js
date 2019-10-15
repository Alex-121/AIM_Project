// const express = require('express');
// const routes = require('./routes/api');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'aim'
// });

// db.connect((err) =>{
//     if(err) {
//         throw(err)
//     }
//     console.log("DB connnected")
// });

// const app = express();

// app.use(bodyParser.json());
// //routes
// app.use('/api/',routes);

// app.listen(process.env.port || 3000, (req,res) =>{
// console.log("now listening to port");
// });