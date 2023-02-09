const { HTTP_STATUS_CONSTANTS } = require('../constants')

/**
 * Server response handler class
 * @class ResponseHandler
 */
class ResponseHandler {
  /**
   * Send success response
   * @export
   * @param {ServerResponse} res
   * @param {any} body
   * @param {string} message
   * @param {number} [statusCode=200]
   * @param {OutgoingHttpHeaders} [headers={}]
   */
  sendSuccessResponse(
    res,
    body,
    message,
    statusCode = HTTP_STATUS_CONSTANTS.OK,
    headers = {},
  ) {
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(statusCode, headers)
    res.end(
      JSON.stringify({
        isError: false,
        data: body,
        message: message || '',
      }),
    )
  }

  /**
   * Send error response
   * @export
   * @param {ServerResponse} res
   * @param {any} body
   * @param {string} message
   * @param {number} [statusCode=500]
   * @param {OutgoingHttpHeaders} [headers={}]
   */
  sendErrorResponse(
    res,
    body,
    message,
    statusCode = HTTP_STATUS_CONSTANTS.INTERNAL_SERVER_ERROR,
    headers = {},
  ) {
    // Logging all service errors here
    console.log('ERROR: ', body)
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(statusCode, headers)
    res.end(
      JSON.stringify({
        isError: true,
        data: body,
        message: message || '',
      }),
    )
  }
}

module.exports = ResponseHandler
