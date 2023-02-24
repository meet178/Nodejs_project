const Joi = require('joi')

class productValidation
{
  productDetailsValidation() {
    return Joi.object({
      body: Joi.object({
        productName: Joi.string().required(),
        productDescription: Joi.string().required(),
        productPrice: Joi.number().required(),
      }).unknown(false),
    }).unknown()
  }

  productSearchValidation(){
    return Joi.object({
      body: Joi.object({
        productName: Joi.string().required()
      }).unknown(false),
    }).unknown()
  }

  updateProductValidation(){
    return Joi.object({
      body: Joi.object({
        _id: Joi.required(),
        productName: Joi.string(),
        productDescription: Joi.string(),
        productPrice: Joi.number(),
      }).unknown(false),
    }).unknown()
  } 

  deleteProductValidation(){
    return Joi.object({
      body: Joi.object({
        _id: Joi.required()
      }).unknown(false),
    }).unknown()
  }

}
module.exports = productValidation