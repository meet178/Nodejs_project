const Joi = require('joi')

class orderValidation
{
  orderDetailsValidation() {
    return Joi.object({
      body: Joi.object({
        userId: Joi.required(),
        productId: Joi.required(),
        paymentMethod: Joi.string().required(),
        payment_ref_id: Joi.number().required(),
        deliveryAddress: Joi.string().required(),
        amount: Joi.number().required(),
        status: Joi.string().required()
      }).unknown(false),
    }).unknown()
  }

  orderDeleteValidation() {
    return Joi.object({
      body: Joi.object({
        _id: Joi.required()
      }).unknown(false),
    }).unknown()
  }
}
module.exports = orderValidation