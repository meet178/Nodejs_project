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

  async login(req,res)
  {
    const loginDetails=req.body
    responseHandler.sendSuccessResponse(
      res,
      await userService.login(loginDetails),
      'User Login Succesfully',
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async getData(req,res)
  {
    const allDBdata=req.body
    responseHandler.sendSuccessResponse(
      res,
      await userService.getData(allDBdata),
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async getDataById(req,res){
    const getDatafromId=req.query
    responseHandler.sendSuccessResponse(
      res,
      await userService.getDataById(getDatafromId),
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

  async Update(req,res){
    const updateDetails=req.body
    responseHandler.sendSuccessResponse(
      res,
      userService.Update(updateDetails),
      'Data Updated Succesfully',
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async Delete(req,res){
    const deleteUserDetails=req.body
    responseHandler.sendSuccessResponse(
      res,
      userService.Delete(deleteUserDetails),
      'Data Deleted Succesfully',
      HTTP_STATUS_CONSTANTS.OK,
    )
  }

  async Search(req,res){
    const allSearchData=req.body
    responseHandler.sendSuccessResponse(
      res,
      await userService.Search(allSearchData),
      HTTP_STATUS_CONSTANTS.OK,
    )
  }
}

module.exports = userController
