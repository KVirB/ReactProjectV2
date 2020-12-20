  
const mongoose = require('mongoose');
const DB = require('../DB');

const ServersShema = mongoose.Schema({
    name: {
      type: String,
      required: true
      },
    about: {
      type: String,
      required: true
      }});
  
  const Servers = module.exports = mongoose.model('Servers', ServersShema);