const {mongoUrl} = require("../config")
const mongoose = require("mongoose")
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });   
  mongoose.Promise = global.Promise;
  module.exports = mongoose;