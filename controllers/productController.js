const productSchema = require("../schema/productSchema")
const {responseHandler} = require("../utils")
const {HTTP_STATUS_CONSTANTS} = require("../constants")

module.exports = {
    productDetails:function(req,res,next){
        productSchema.create({
            productName: req.body.productName ,
            productDescription: req.body.productDescription ,
            productPrice: req.body.productPrice ,
        },
        function (err, response) {
            if (err) next(err);
            else {
                responseHandler.sendSuccessResponse(
                    res,
                    "",
                    'Product Added',
                    HTTP_STATUS_CONSTANTS.OK,
                  )
              }
          }
        )
    }

}