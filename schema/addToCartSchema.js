const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addToCartSchema = new Schema({
  userId:{
    type: String,
    required: true,
  },
  productIds:{
    type: Array,
    required: true,
  }
})

module.exports = mongoose.model('addToCartCollection', addToCartSchema)