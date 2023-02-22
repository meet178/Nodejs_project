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
     
  Search(allSearchData){
    try{
      return new Promise((resolve,reject) => {
        const searchQuery = {
          productName: {$regex: (allSearchData.productName),  $options: 'i'},
        }
        const searchData=  productSchema.find(searchQuery)
        resolve(searchData)
        reject('rejected')
      })
    }catch(error){
      console.log('ERROR: ', error)
    }
  }

  getAllProducts(){
    return new Promise((resolve,reject) => {
      try{
        const allProductData = productSchema.find()
        resolve(allProductData)
        reject('rejected')
      }catch(error){
        console.log('ERROR: ', error)
      }
    })
  }
  
  updateProduct(updatedProduct){
    try{
      return new Promise((resolve,reject) => {
        const updateProductDetails =  productSchema.updateOne(
          {_id:updatedProduct._id},
          {$set:
           {
             productName: updatedProduct.productName,
             productDescription: updatedProduct.productDescription,
             productPrice: updatedProduct.productPrice,
           }
          })
        resolve(updateProductDetails)
        reject('rejected')
      })
    }catch(error){
      console.log(error)
    }
  }

  deleteProduct(deleteProductData){
    try{
      return new Promise((resolve,reject) => {
        const productDelete =  productSchema.deleteOne(
          {_id:deleteProductData._id},
          {$delete:
          {
            Name: deleteProductData.Name,
            MoNum: deleteProductData.MoNum,
            email: deleteProductData.email,  
            GST_Num:deleteProductData.GST_Num,
            Address:deleteProductData.Address,
            City:deleteProductData.City,
            District:deleteProductData.District,
            Password: deleteProductData.Password,
          }
          })
        resolve(productDelete)
        reject('rejected')
      })
    }catch(error){
      console.log(error)
    }
  }

}

module.exports = productService
