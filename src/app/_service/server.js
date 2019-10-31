const express = require('express')
const routes = require('../api/routes/api');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type,Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
})
app.use(bodyParser.json());

app.use('/api/',routes);

app.listen(process.env.port || 3000, (req,res) =>{

console.log("now listening to port");
});