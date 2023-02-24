const { HTTP_STATUS_CONSTANTS } = require('../constants')
const {responseHandler} = require('../utils')
const {userService} =require('../services')

class userController {
  async userSignUp(req, res) {
    const userData=req.body
    responseHandler.sendSuccessResponse(
      res,
      await userService.userSignUp(userData),
      'Data inserted',
      HTTP_STATUS_CONSTANTS.OK,
    )      
  }

  async userLogin(req,res)
  {
    const loginDetails=req.body
    responseHandler.sendSuccessResponse(
      res,
      await userService.userLogin(loginDetails),
      'User Login Succesfully',
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async AddToCart(req,res)
  {
    const addToCartItems=req.body
    responseHandler.sendSuccessResponse(
      res,
      await userService.AddToCart(addToCartItems),
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async userUpdate(req,res){
    const updateDetails=req.body
    responseHandler.sendSuccessResponse(
      res,
      userService.userUpdate(updateDetails),
      'Data Updated Succesfully',
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async userGetData(req,res)
  {
    const allDBdata=req.body
    responseHandler.sendSuccessResponse(
      res,
      await userService.userGetData(allDBdata),
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async userGetDataById(req,res){
    const getDatafromId=req.query
    responseHandler.sendSuccessResponse(
      res,
      await userService.userGetDataById(getDatafromId),
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async userForgetPassword(req,res)
  {
    const forgotEmail=req.body
    responseHandler.sendSuccessResponse(
      res,
      userService.userForgetPassword(forgotEmail),
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async userDelete(req,res){
    const deleteUserDetails=req.body
    responseHandler.sendSuccessResponse(
      res,
      userService.userDelete(deleteUserDetails),
      'Data Deleted Succesfully',
      HTTP_STATUS_CONSTANTS.OK,
    )
  }
}

module.exports = userController
