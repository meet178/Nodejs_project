const productSchema = require('../schema/productSchema')

class productService { 
  productDetails(productData){
    try{
      productSchema.create({
        productName: productData.productName ,
        productDescription: productData.productDescription ,
        productPrice: productData.productPrice ,
      })
      return {}
    }catch(error){
      console.log(error)
    }
  }
}

module.exports = productService
