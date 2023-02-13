const express = require('express')
const { JoiValidatorMiddleware } = require('../../middlewares')
const {userSignup} = require('../../validators/app')
const {userController} = require('../../controllers')
const {jwtMiddleware} = require('../../middlewares')

const appRouter = express.Router()

appRouter.post('/signup', JoiValidatorMiddleware(userSignup.signUp()), userController.signUp)
appRouter.post('/login', JoiValidatorMiddleware(userSignup.login()),userController.login)
appRouter.get('/forgetPassword', JoiValidatorMiddleware(userSignup.forgetPassword()),jwtMiddleware,userController.forgetPassword)

module.exports = appRouter