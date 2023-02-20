const {responseHandler} = require('../utils')
const {HTTP_STATUS_CONSTANTS} = require('../constants')
const {productService} = require('../services')

module.exports = {
  async productDetails(req, res) {
    const productData=req.body
    responseHandler.sendSuccessResponse(
      res,
      await productService.productDetails(productData),
      'Product Added',
      HTTP_STATUS_CONSTANTS.OK,
    )      
  }
}