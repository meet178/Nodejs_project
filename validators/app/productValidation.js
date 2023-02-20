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
}
module.exports = productValidation