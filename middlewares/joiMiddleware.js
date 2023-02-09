const JoiErrorHandler = require('./errorHandler')

/**
 * Bind joi schema with joi validator middleware to validate request object
 * @export
 * @param {} schema
 * @returns Middleware function
 */
module.exports = schema => {
  return _joiValidator.bind({ schema })
}

/**
 * Middleware for validating joi schema
 * @param req
 * @param res
 * @param next
 */
async function _joiValidator(req, res, next) {
  try {
    const schema = this.schema
    await schema.validateAsync(req)
    next()
  } catch (error) {
    // Handle joi validation errors
    JoiErrorHandler(error, req, res, next)
  }
}
