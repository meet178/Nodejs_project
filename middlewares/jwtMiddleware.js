const {responseHandler} = require('../utils')
const {HTTP_STATUS_CONSTANTS} = require('../constants')
const {JWT_SECRET} = require('../config')
const jwt = require('jsonwebtoken')
const userSchema = require('../schema/userSchema')

function jwtMiddleware(req,res,next){
  jwt.verify(req.headers.token, JWT_SECRET, async function(err,decoded){
    if(err)
    {
      responseHandler.sendErrorResponse(
        res,
        '',
        err,
        HTTP_STATUS_CONSTANTS.BAD_REQUEST
      )
    }
    else
    {
      const User = await userSchema.find({_id: decoded.userid})
      console.log('User',User)
      req.Userid = decoded.userid
      if(!User)
      {
        responseHandler.sendErrorResponse(
          res,
          '',
          err,
          HTTP_STATUS_CONSTANTS.BAD_REQUEST
        )

      }
      else{
        next()        
      }
    }
  })
}

module.exports = jwtMiddleware
