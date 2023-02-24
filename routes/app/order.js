const express = require('express')
const {orderController} = require('../../controllers')
const {JoiValidatorMiddleware} = require('../../middlewares')
const {orderValidation} = require('../../validators/app')
const {jwtMiddleware} = require('../../middlewares')

const orderRouter = express.Router()

orderRouter.post('/orderDetails',JoiValidatorMiddleware(orderValidation.orderDetailsValidation()),jwtMiddleware, orderController.orderDetails)
orderRouter.delete('/orderDelete',JoiValidatorMiddleware(orderValidation.orderDeleteValidation()),jwtMiddleware, orderController.orderDelete)

module.exports = orderRouter