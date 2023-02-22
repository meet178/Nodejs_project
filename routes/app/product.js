const express = require('express')
const { JoiValidatorMiddleware } = require('../../middlewares')
const {productValidation} = require('../../validators/app')
const {productController} = require('../../controllers')
const {jwtMiddleware} = require('../../middlewares')

const productRouter = express.Router()
productRouter.post('/productDetails', JoiValidatorMiddleware(productValidation.productDetails()), jwtMiddleware, productController.productDetails)
productRouter.post('/Search',JoiValidatorMiddleware(productValidation.Search()),jwtMiddleware,productController.Search)
productRouter.get('/getAllProducts',productController.getAllProducts)
productRouter.put('/updateProduct',JoiValidatorMiddleware(productValidation.updateProduct()),jwtMiddleware,productController.updateProduct)
productRouter.delete('/deleteProduct',JoiValidatorMiddleware(productValidation.deleteProduct()),jwtMiddleware,productController.deleteProduct)

module.exports = productRouter