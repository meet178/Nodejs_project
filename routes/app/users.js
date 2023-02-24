const express = require('express')
const { JoiValidatorMiddleware } = require('../../middlewares')
const {userSignup} = require('../../validators/app')
const {userController} = require('../../controllers')
const {jwtMiddleware} = require('../../middlewares')

const appRouter = express.Router()

// API
appRouter.post('/signup', JoiValidatorMiddleware(userSignup.userSignUpValidation()), userController.userSignUp)
appRouter.post('/login', JoiValidatorMiddleware(userSignup.userloginValidation()),userController.userLogin)
appRouter.post('/addToCart',JoiValidatorMiddleware(userSignup.userAddToCartValidation()),jwtMiddleware,userController.AddToCart)
appRouter.put('/updateProfile',JoiValidatorMiddleware(userSignup.userUpdateProfileValidation()),jwtMiddleware, userController.userUpdate)
appRouter.get('/getAllUsers',jwtMiddleware,userController.userGetData)
appRouter.get('/getProfile',jwtMiddleware,userController.userGetDataById)
appRouter.get('/forgetPassword',JoiValidatorMiddleware(userSignup.userforgetPasswordValidation()),jwtMiddleware,userController.userForgetPassword)
appRouter.delete('/deleteUser',JoiValidatorMiddleware(userSignup.userDeleteUserValidation()),jwtMiddleware,userController.userDelete)

module.exports = appRouter