const { HTTP_STATUS_CONSTANTS } = require('../constants')
const {responseHandler} = require('../utils')
const {orderService} =require('../services')

class orderController {
  async orderDetails(req, res) {
    const orderData=req.body
    responseHandler.sendSuccessResponse(
      res,
      await orderService.orderDetails(orderData),
      'Order Submitted',
      HTTP_STATUS_CONSTANTS.OK,
    )      
  }

  async orderDelete(req,res) {
    const orderDeleteData=req.body
    responseHandler.sendSuccessResponse(
      res,
      await orderService.orderDelete(orderDeleteData),
      'Order Deleted',
      HTTP_STATUS_CONSTANTS.OK,
    )
  }
}

module.exports = orderController
