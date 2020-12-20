const express = require('express');
const router = express.Router();
const DB = require('../DB');
const Servers = require("../schemas/servers");


router.get('/servers', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
     Servers.find({}, (err, servers) => {
       if(err) throw err;
       return res.send(servers)
     });
});




module.exports = router;

