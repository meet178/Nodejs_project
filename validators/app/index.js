/**
 * Initialize pose validator classes and export
 */
const userSignup = require('./userValidator')
const productValidation = require('./productValidation')
const addToCartValidation = require("./addToCartValidation")
const orderValidation = require('./orderValidation')

module.exports = {
  userSignup: new userSignup(),
  productValidation: new productValidation(),
  addToCartValidation: new addToCartValidation(),
  orderValidation : new orderValidation()
}