const Joi = require('joi')

/**
 * Validator class for asana route
 * @class userSignup
 */
class userSignup
 {
  signUp() {
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

  login(){
    return Joi.object({
      body: Joi.object({
        email: Joi.string().email().lowercase().required(),
        Password: Joi.string().min(8).required()
      }).unknown(false),
    }).unknown()
  }

  forgetPassword(){
    return Joi.object({
      body: Joi.object({
        email: Joi.string().email().lowercase().required(),
      })
    })
  }
}

module.exports = userSignup

