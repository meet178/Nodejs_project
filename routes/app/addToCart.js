const express = require('express')
const {addToCartController} = require('../../controllers')

const addToCartRouter = express.Router()

addToCartRouter.post('/addToCartSignUp',addToCartController.addToCartSignUp)
addToCartRouter.get('/addToCartUpdate',addToCartController.addToCartDelete)

module.exports = addToCartRouter