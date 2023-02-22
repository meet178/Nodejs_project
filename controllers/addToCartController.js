const {responseHandler} = require('../utils')
const {HTTP_STATUS_CONSTANTS} = require('../constants')
const {addToCartService} = require('../services')

class addToCartController {

  async addToCartSignUp(req, res) {
    const addToCartData=req.body
    responseHandler.sendSuccessResponse(
      res,
      await addToCartService.addToCartSignUp(addToCartData),
      'Data inserted',
      HTTP_STATUS_CONSTANTS.OK,
    )  
  }

  async addToCartDelete(req,res){
    const deleteAddToCart=req.body
    responseHandler.sendSuccessResponse(
      res,
      await addToCartService.addToCartDelete(deleteAddToCart),
      HTTP_STATUS_CONSTANTS.OK,
    ) 
  }
}

module.exports = addToCartController

/*
 * Module.exports = {
 *   async productDetails(req, res) {
 *     const productData=req.body
 *     responseHandler.sendSuccessResponse(
 *       res,
 *       await productService.productDetails(productData),
 *       'Product Added',
 *       HTTP_STATUS_CONSTANTS.OK,
 *     )      
 *   }
 */

// }