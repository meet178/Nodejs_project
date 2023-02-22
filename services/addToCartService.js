const addToCartSchema = require('../schema/addToCartSchema')

class addToCartService {
  addToCartSignUp(addToCartData){
    try{
      return new Promise((resolve,reject) => {
        const checkUser = addToCartSchema.findOne({userId:addToCartData.userId})
        console.log('Yes',checkUser)
        const productDetails = addToCartSchema.create({
          userId: addToCartData.userId ,
          productIds: addToCartData.productId ,
        })
        resolve(productDetails)
        reject('rejected')
      })
      // Return {productDetails}
    }catch(error){
      console.log(error)
    }
  }

  async addToCartDelete(deleteAddToCart){
    console.log('110',deleteAddToCart)
    try{
      const addToCartUpdateData = await addToCartSchema.findOne({userId:deleteAddToCart.userId})
      const array = addToCartUpdateData.productIds

      const filteredArray = array.filter(e => e !== deleteAddToCart.productIds)
      console.log(filteredArray)
       
      const updateadToCart = addToCartSchema.updateOne(
        {_id:deleteAddToCart._id},
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