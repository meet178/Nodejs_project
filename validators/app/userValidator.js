const Joi = require('joi')

/**
 * Validator class for asana route
 * @class userSignup
 */
class userSignup
{
  userSignUpValidation() {
    return Joi.object({
      body: Joi.object({
        Name: Joi.string().required(),
        MoNum: Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required(),
        email: Joi.string().email().lowercase().required(),
        GST_Num: Joi.number().min(15).required(),
        Address: Joi.string(),
        City: Joi.string(),
        District: Joi.string(),
        Password: Joi.string().min(8).required()
      }).unknown(false),
    }).unknown()
  }

  userloginValidation(){
    return Joi.object({
      body: Joi.object({
        email: Joi.string().email().lowercase().required(),
        Password: Joi.string().min(8).required()
      }).unknown(false),
    }).unknown()
  }

  userAddToCartValidation(){
    return Joi.object({
      body: Joi.object({
        _id: Joi.required(),
      }).unknown(false),
    }).unknown()
  }

  userUpdateProfileValidation(){
    return Joi.object({
      body: Joi.object({
        _id: Joi.required(),
        Name: Joi.string(),
        MoNum: Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1),
        email: Joi.string().email().lowercase(),
        Password: Joi.string().min(8),
        GST_Num: Joi.number().min(15),
        Address: Joi.string(),
        City: Joi.string(),
        District: Joi.string()
      }).unknown(false),
    }).unknown()
  }

  userforgetPasswordValidation(){
    return Joi.object({
      body: Joi.object({
        email: Joi.string().email().lowercase().required()
      }).unknown(false),
    }).unknown()
  }

  userDeleteUserValidation(){
    return Joi.object({
      body: Joi.object({
        _id: Joi.required()
      }).unknown(false),
    }).unknown()
  }
}

module.exports = userSignup

