const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { MONGO_URL } = require('../util/config')

console.log(`MONGO_URL is ${MONGO_URL}`)
if (MONGO_URL && !mongoose.connection.readyState) {
  console.log('true')
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = {
  Todo
}

