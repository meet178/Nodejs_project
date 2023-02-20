const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  productName:{
    type: String,
    required: true,
  },
  productDescription:{
    type: String,
    required: true,
  },
  productPrice:{
    type: Number,
    required: true,
  },
  File: {
    type: String,
  },
})

module.exports = mongoose.model('productCollection', productSchema)