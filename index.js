const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
//Database Configuration
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, {useMongoClient: true} ,(err)=>{
  if (err)
  {
    console.log('Could Not connect to database', err);

  }else{
    console.log('Connected To Database: ' + config.db);
  }

});
//Initialize App
const app = express();

//Define Static Files

app.use(express.static(path.join(__dirname, 'client/dist/')));

app.get('/', (req, res)=>{

res.sendFile(path.join(__dirname, 'client/dist/index.html'));

});

app.listen(8080, (err)=>{

if (err) throw err;

console.log('Server Started at port 8080');

});
