const express = require('express')
const { JoiValidatorMiddleware } = require('../../middlewares')
const {productValidation} = require('../../validators/app')
const {productController} = require('../../controllers')
const {jwtMiddleware} = require('../../middlewares')

const productRouter = express.Router()

productRouter.post('/productDetails', JoiValidatorMiddleware(productValidation.productDetailsValidation()), jwtMiddleware, productController.productDetails)
productRouter.post('/Search',JoiValidatorMiddleware(productValidation.productSearchValidation()),jwtMiddleware,productController.Search)
productRouter.get('/getAllProducts',jwtMiddleware,productController.getAllProducts)
productRouter.put('/updateProduct',JoiValidatorMiddleware(productValidation.updateProductValidation()),jwtMiddleware,productController.updateProduct)
productRouter.delete('/deleteProduct',JoiValidatorMiddleware(productValidation.deleteProductValidation()),jwtMiddleware,productController.deleteProduct)

module.exports = productRouter