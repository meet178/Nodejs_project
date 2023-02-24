const express = require('express')
const {addToCartController} = require('../../controllers')
const {JoiValidatorMiddleware} = require('../../middlewares')
const {addToCartValidation} = require('../../validators/app')
const {jwtMiddleware} = require('../../middlewares')

const addToCartRouter = express.Router()

addToCartRouter.post('/addToCartSignUp',JoiValidatorMiddleware(addToCartValidation.addToCartSignUpValidation()),jwtMiddleware,addToCartController.addToCartSignUp)
addToCartRouter.get('/addToCartDelete',JoiValidatorMiddleware(addToCartValidation.addToCartDeleteValidation()),jwtMiddleware,addToCartController.addToCartDelete)

module.exports = addToCartRouter