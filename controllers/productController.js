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
  },

  async Search(req,res){
    const allSearchData=req.body
    responseHandler.sendSuccessResponse(
      res,
      await productService.Search(allSearchData),
      HTTP_STATUS_CONSTANTS.OK,
    )
  },

  async getAllProducts(req,res){
    const allProduct=req.body
    responseHandler.sendSuccessResponse(
      res,
      await productService.getAllProducts(allProduct),
      HTTP_STATUS_CONSTANTS.OK,
    )
  },

  async updateProduct(req,res){
    const updatedProduct=req.body
    responseHandler.sendSuccessResponse(
      res,
      await productService.updateProduct(updatedProduct),
      'Product Updated Succesfully',
      HTTP_STATUS_CONSTANTS.OK,
    )
  },

  async deleteProduct(req,res){
    const deleteProductData=req.body
    responseHandler.sendSuccessResponse(
      res,
      await productService.deleteProduct(deleteProductData),
      'Product Deleted Succesfully',
      HTTP_STATUS_CONSTANTS.OK,
    )
  },

}