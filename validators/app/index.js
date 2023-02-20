/**
 * Initialize pose validator classes and export
 */
const userSignup = require('./userValidator')
const productValidation = require('./productValidation')

module.exports = {
  userSignup: new userSignup(),
  productValidation: new productValidation(),
}