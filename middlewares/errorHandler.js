const Joi = require('joi')

const { responseHandler } = require('../utils'),
  { HTTP_STATUS_CONSTANTS } = require('../constants')

/**
 * Handle joi validation errors
 * @export
 * @param error
 * @param req
 * @param res
 * @param next
 * @returns
 */
module.exports = (error, req, res, next) => {
  if (!(error instanceof Joi.ValidationError)) {
    next(error)
    return
  }
  const errorBody = {
    message: error.message,
    data: {},
  }
  console.log('ERROR: ', error.stack)

  return responseHandler.sendErrorResponse(
    res,
    errorBody.data,
    errorBody.message,
    HTTP_STATUS_CONSTANTS.BAD_REQUEST,
  )
}
