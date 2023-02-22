const Joi = require('joi')

class productValidation
{
  productDetails() {
    return Joi.object({
      body: Joi.object({
        productName: Joi.string().required(),
        productDescription: Joi.string().required(),
        productPrice: Joi.number().required(),
      }).unknown(false),
    }).unknown()
  }

  Search(){
    return Joi.object({
      body: Joi.object({
        productName: Joi.string().required()
      }).unknown(false),
    }).unknown()
  }

  updateProduct(){
    return Joi.object({
      body: Joi.object({
        _id: Joi.required(),
        productName: Joi.string(),
        productDescription: Joi.string(),
        productPrice: Joi.number(),
      }).unknown(false),
    }).unknown()
  } 

  deleteProduct(){
    return Joi.object({
      body: Joi.object({
        _id: Joi.required()
      }).unknown(false),
    }).unknown()
  }

}
module.exports = productValidation