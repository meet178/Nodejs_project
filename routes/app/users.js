const express = require('express')
const { JoiValidatorMiddleware } = require('../../middlewares')
const {userSignup} = require('../../validators/app')
const {userController} = require('../../controllers')
const {jwtMiddleware} = require('../../middlewares')

const appRouter = express.Router()

appRouter.post('/signup', JoiValidatorMiddleware(userSignup.signUp()), userController.signUp)
appRouter.post('/login', JoiValidatorMiddleware(userSignup.login()),userController.login)
appRouter.post('/Search',userController.Search)
appRouter.put('/Update', userController.Update)
appRouter.get('/getAllData',userController.getData)
appRouter.get('getDataById',userController.getDataById)
appRouter.get('/forgetPassword', JoiValidatorMiddleware(userSignup.forgetPassword()),jwtMiddleware,userController.forgetPassword)
appRouter.delete('/delete',userController.Delete)

module.exports = appRouter