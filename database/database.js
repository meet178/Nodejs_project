const {mongoUrl} = require('../config')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})   
mongoose.Promise = global.Promise
module.exports = mongoose