/**
 * Initialize pose validator classes and export
 */
const userSignup = require('./userValidator')

module.exports = {
  userSignup: new userSignup(),
}