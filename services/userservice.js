const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
const userSchema = require('../schema/userSchema')

class userService {
  async signUp(userData) {
    try{
      userSchema.create(
        {
          Name: userData.Name,
          MoNum: userData.MoNum,
          email: userData.email,  
          GST_Num:userData.GST_Num,
          Address:userData.Address,
          Role:'customer',
          City:userData.City,
          District:userData.District,
          Password: userData.Password,
        },
      )
      const Hello = 'Hello'
      return Hello
    }catch(error){
      console.log('ERROR: ', error)
      return {msg:'catch'}
    }
  }

  async login(loginDetails) {
    try{
      userSchema.findOne({email:loginDetails.email},function(err,user){
        if(err) throw err
        user.comparePassword(loginDetails.Password,function(err,isMatch)
        {
          if(err) throw err
          if(isMatch){
            const token = jwt.sign(
              {userid:user._id},
              JWT_SECRET,{
                expiresIn:'2h',
              }
            )
            console.log(token)
            const login_token = token
            return login_token
          }
        })
      })
    }catch(error){
      console.log('ERROR: ', error)
    }
  }
  
  async forgotPassword(forgotEmail) {
    try{
      userSchema.findOne({email:forgotEmail.email},function(err){
        if(err) throw err
      })
      const Hello = 'Hello'
      return Hello
    }catch(error){
      console.log('ERROR: ', error)
      return {}
    }
  }
}

module.exports = userService
