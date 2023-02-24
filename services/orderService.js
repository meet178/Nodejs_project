const orderSchema =require('../schema/orderSchema')

class orderService {
  orderDetails(orderData){
    try{
      const orderConfirm =  orderSchema.create({
        userId:orderData.userId,
        productId:orderData.productId,
        paymentMethod:orderData.paymentMethod,
        payment_ref_id:orderData.payment_ref_id,
        deliveryAddress:orderData.deliveryAddress,
        amount:orderData.amount,
        status:orderData.status
      })
      return orderConfirm
    }catch(error){
      console.log('ERROR: ', error)
    }
  }

  orderDelete(orderDeleteData){
    try{
      return new Promise((resolve,reject) => {
        const orderDelete =  orderSchema.deleteOne(
          {_id:orderDeleteData._id},
          {$delete:
          {
            Name: orderDeleteData.Name,
            MoNum: orderDeleteData.MoNum,
            email: orderDeleteData.email,  
            GST_Num:orderDeleteData.GST_Num,
            Address:orderDeleteData.Address,
            City:orderDeleteData.City,
            District:orderDeleteData.District,
            Password: orderDeleteData.Password,
          }
          })
        resolve(orderDelete)
        reject('rejected')
      })
    }catch(error){
      console.log('ERROR: ', error)
    }

  }
}

module.exports = orderService