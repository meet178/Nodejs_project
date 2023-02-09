const express = require("express");
const { JoiValidatorMiddleware } = require('../../middlewares')
const {userSignup} = require("../../validators/app")
const controller = require("../../controllers/userController")

const appRouter = express.Router();

appRouter.post("/signup", JoiValidatorMiddleware(userSignup.signUp()), controller.signUp);
appRouter.post("/login", JoiValidatorMiddleware(userSignup.login()),controller.login)
appRouter.post("/forgetPassword", JoiValidatorMiddleware(userSignup.forgetPassword()),controller.forgetPassword)

module.exports = appRouter;