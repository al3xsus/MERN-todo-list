const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TODOSchema = new Schema({
  value: {type: String, unique: false},
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now},
  username: {type: String, unique: false}
})

// Create reference to User & export
const TODO = mongoose.model('TODO', TODOSchema)
module.exports = TODO
