const userController = require('./userController')
const productController = require('./productController')
const addToCartController = require("./addToCartController")
const orderController = require('./orderController')

module.exports = {
  userController: new userController(),
  productController,
  addToCartController: new addToCartController(),
  orderController: new orderController()
}
