const express = require('express')
const { JoiValidatorMiddleware } = require('../../middlewares')
const {userSignup} = require('../../validators/app')
const {userController} = require('../../controllers')
const {jwtMiddleware} = require('../../middlewares')

const appRouter = express.Router()

appRouter.post('/signup', JoiValidatorMiddleware(userSignup.signUp()), userController.signUp)
appRouter.post('/login', JoiValidatorMiddleware(userSignup.login()),userController.login)
appRouter.post('/addToCart',jwtMiddleware,userController.AddToCart)
appRouter.put('/updateProfile',JoiValidatorMiddleware(userSignup.updateProfile()),jwtMiddleware, userController.Update)
appRouter.get('/getAllUsers',userController.getData)
appRouter.get('/getProfile',userController.getDataById)
appRouter.get('/forgetPassword',JoiValidatorMiddleware(userSignup.forgetPassword()),jwtMiddleware,userController.forgetPassword)
appRouter.delete('/deleteUser',JoiValidatorMiddleware(userSignup.deleteUser()),userController.Delete)

module.exports = appRouter