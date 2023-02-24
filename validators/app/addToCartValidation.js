const Joi = require('joi')

class addToCartValidation
{
  addToCartSignUpValidation() {
    return Joi.object({
      body: Joi.object({
        userId: Joi.number().required(),
        productId: Joi.number().required()
      }).unknown(false),
    }).unknown()
  }

  addToCartDeleteValidation(){
    return Joi.object({
      body: Joi.object({
        userId: Joi.number().required(),
        productIds: Joi.number().required()
      }).unknown(false),
    }).unknown()
  }
}
module.exports = addToCartValidation