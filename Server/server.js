
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const DB = require('./DB');

const serv = express();

const port = 3001;

const servers = require('./routes/serversPage');
const { db } = require('./schemas/servers');


serv.use(bodyParser.json());
serv.use('/api', servers)


serv.listen(port, ()=>{
    console.log("connected");
  });

  mongoose.connect(DB.servers, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on('connected', () => {
    console.log("sucsses");
  });

  mongoose.connection.on('error', (err) => {
    console.log("not sucsses" + err);
  });

  

