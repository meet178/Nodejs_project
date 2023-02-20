const productSchema = require('../schema/productSchema')

class productService { 
  productDetails(productData){
    try{
      return new Promise((resolve,reject) => {
        const productDetails = productSchema.create({
          productName: productData.productName ,
          productDescription: productData.productDescription ,
          productPrice: productData.productPrice ,
        })
        resolve(productDetails)
        reject('rejected')
      })
      // Return {productDetails}
    }catch(error){
      console.log(error)
    }
  }
}

module.exports = productService
