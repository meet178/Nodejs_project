const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
const { HTTP_STATUS_CONSTANTS } = require('../constants')
const {responseHandler} = require("../utils")
var userSchema = require("../schema/userSchema")

// InsertData
module.exports = {
  signUp: function (req, res, next) {
    userSchema.create(
            {
                Name: req.body.Name,
                MoNum: req.body.MoNum,
                email: req.body.email,  
                GST_Num:req.body.GST_Num,
                Address:req.body.Address,
                Role:"customer",
                City:req.body.City,
                District:req.body.District,
                Password: req.body.Password,
            },
            function (err, response) {
          if (err) next(err);
          else {
            responseHandler.sendSuccessResponse(
              res,
              "",
              'Data inserted',
              HTTP_STATUS_CONSTANTS.OK,
            )
          }
        }
      );
    },

    login: function(req,res){
      console.log(req.body.email);
      userSchema.findOne({email:req.body.email},function(err,user){
        if(err) throw err
        console.log(user);

        user.comparePassword(req.body.Password,function(err,isMatch)
        {
          if(err) throw err;

          if(isMatch){
            const token = jwt.sign(
              {userid:user._id},
              JWT_SECRET,{
                expiresIn:"2h",
              }
            );
            responseHandler.sendSuccessResponse(
              res,
              {token},
              'User Login Succesfully',
              HTTP_STATUS_CONSTANTS.OK
            )
          }
          else
          {
            res.json({msg:"Email and Password is wrong"})
          }
        })
      })
    }



}