const express = require('express')
const { JoiValidatorMiddleware } = require('../../middlewares')
const {productValidation} = require('../../validators/app')
const controller = require('../../controllers/productController')
const {jwtMiddleware} = require('../../middlewares')

const productRouter = express.Router()
productRouter.post('/productDetails', JoiValidatorMiddleware(productValidation.productDetails()), jwtMiddleware, controller.productDetails)

module.exports = productRouter