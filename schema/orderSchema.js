const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  userId:{
    type: String,
    required: true,
  },
  productId:{
    type: String,
    required: true,
  },
  paymentMethod:{
    type: String,
    required: true,
  },
  payment_ref_id: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('orderCollection', orderSchema)