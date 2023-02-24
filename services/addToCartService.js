const addToCartSchema = require('../schema/addToCartSchema')

class addToCartService {
  async addToCartSignUp(addToCartData){
    try{
      const checkUser = await addToCartSchema.findOne({userId:addToCartData.userId})  
      if(checkUser)
      {
        const Ids = checkUser.productIds
        const isIds = Ids.includes(addToCartData.productId)
        const err_msg = 'Id is simmiler'
        if(isIds){
          return {err_msg}
        }
        else
        {
          const array = checkUser.productIds
          array.push(addToCartData.productId)
          const updatproductId = addToCartSchema.updateOne(
            {_id:checkUser._id},
            {$set:
              {
                productIds: array,
              }
            }
          )
          return updatproductId
        }
        
      }
      else
      {
        const productDetails = addToCartSchema.create({
          userId: addToCartData.userId,
          productIds: [addToCartData.productId],
        })
        return productDetails
      }
    }catch(error){
      console.log(error)
    }
  }

  async addToCartDelete(deleteAddToCart){
    try{
      const addToCartUpdateData = await addToCartSchema.findOne({userId:deleteAddToCart.userId})
      const array = addToCartUpdateData.productIds

      const filteredArray = array.filter(e => e !== deleteAddToCart.productIds)
       
      const updateadToCart = addToCartSchema.updateOne(
        {_id:addToCartUpdateData._id},
        {$set:
          {
            productIds: filteredArray,
          }
        }
      )
      return updateadToCart
    }catch(error){
      console.log(error)
    }
  }
}
module.exports = addToCartService

