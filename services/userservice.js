const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
const userSchema = require('../schema/userSchema')

class userService {

  async userSignUp(userData) {
    try{      
      userSchema.create(
        {
          Name: userData.Name,
          MoNum: userData.MoNum,
          email: userData.email,  
          GST_Num: userData.GST_Num,
          Address: userData.Address,
          Role:'customer',
          City: userData.City,
          District: userData.District,
          Password: userData.Password,
        },
      )
      
    }catch(error){
      console.log('ERROR: ', error)
      return {msg:'catch'}
    }
  }
  
  async userLogin(loginDetails) {
    try{
      const user = await userSchema.findOne({email:loginDetails.email})
      console.log(user)
      if(!user)
      {
        return 'User Not Found'
      }
      else{
        return new Promise((resolve, reject) => {
          user.comparePassword(loginDetails.Password,function(err,isMatch)
          {
            console.log(isMatch)
            if(err) reject(err)
            if(isMatch){
              const JWTtoken = jwt.sign(
                {userid:user._id},
                JWT_SECRET,{
                  expiresIn:'2h',
                }
              )
              console.log(JWTtoken)
              resolve({JWTtoken})
            }
            else{
              resolve({message:'userID or password are incorrect'})
            }
          })
        })
      }
      // If(err) throw err

    }catch(error){
      console.log('ERROR: ', error)
    }
  }

  AddToCart(addToCartItems){
    return new Promise((resolve,reject) => {
      // Const _id = ''
      try{
        const CartData = userSchema.findOne({_id:addToCartItems._id})
        resolve(CartData)
        reject('rejected')
      }catch(error){
        console.log('ERROR: ', error)
      }
    })
  }

  userUpdate(updateDetails){
    try{
      return new Promise((resolve,reject) => {
        const upDate =  userSchema.updateOne(
          {_id:updateDetails._id},
          {$set:
          {
            Name: updateDetails.Name,
            MoNum: updateDetails.MoNum,
            email: updateDetails.email,  
            GST_Num:updateDetails.GST_Num,
            Address:updateDetails.Address,
            City:updateDetails.City,
            District:updateDetails.District,
            Password: updateDetails.Password,
          }
          })
        resolve(upDate)
        reject('rejected')
      })

    }catch(error){
      console.log('ERROR: ', error)
    }
  }

  userGetData(){
    return new Promise((resolve,reject) => {
      try{
        const AllData = userSchema.find()
        resolve(AllData)
        reject('rejected')
      }catch(error){
        console.log('ERROR: ', error)
      }
    })
  }

  userGetDataById(getDatafromId){
    return new Promise((resolve,reject) => {
      try{
        const getIdData = userSchema.findOne({_id:getDatafromId._id})
        resolve(getIdData)
        reject('rejected')
      }catch(error){
        console.log('ERROR: ', error)
      }
    })
  }

  async userForgetPassword(forgotEmail) {
    try{
      userSchema.findOne({email:forgotEmail.email},function(err){
        if(err) throw err
      })
    }catch(error){
      console.log('ERROR: ', error)
      return {}
    }
  }

  userDelete(deleteUserDetails){
    try{
      return new Promise((resolve,reject) => {
        const Delete =  userSchema.deleteOne(
          {_id:deleteUserDetails._id},
          {$delete:
          {
            Name: deleteUserDetails.Name,
            MoNum: deleteUserDetails.MoNum,
            email: deleteUserDetails.email,  
            GST_Num:deleteUserDetails.GST_Num,
            Address:deleteUserDetails.Address,
            City:deleteUserDetails.City,
            District:deleteUserDetails.District,
            Password: deleteUserDetails.Password,
          }
          })
        resolve(Delete)
        reject('rejected')
      })
    }catch(error){
      console.log('ERROR: ', error)
    }
  }
}

module.exports = userService

