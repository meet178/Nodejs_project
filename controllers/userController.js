const { HTTP_STATUS_CONSTANTS } = require('../constants')
const {responseHandler} = require('../utils')
const {userService} =require('../services')

class userController {
  async signUp(req, res) {
    const userData=req.body
    responseHandler.sendSuccessResponse(
      res,
      await userService.signUp(userData),
      'Data inserted',
      HTTP_STATUS_CONSTANTS.OK,
    )      
  }

  login(req,res)
  {
    const loginDetails=req.body
    responseHandler.sendSuccessResponse(
      res,
      userService.login(loginDetails),
      'User Login Succesfully',
      HTTP_STATUS_CONSTANTS.OK,
    )      
  }

  async forgetPassword(req,res)
  {
    const forgotEmail=req.body
    responseHandler.sendSuccessResponse(
      res,
      userService.forgotPassword(forgotEmail),
      HTTP_STATUS_CONSTANTS.OK,
    )     
  }  
}

module.exports = userController