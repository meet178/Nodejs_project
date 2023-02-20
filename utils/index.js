const sendEmail = require("./sendEmail"),
ResponseHandler = require('./serverResponseutils')

/**
 * @exports Utils
 */
module.exports = {
  responseHandler: new ResponseHandler(),
  sendEmail
}