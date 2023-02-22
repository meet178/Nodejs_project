const userController = require('./userController')
const productController = require('./productController')
const addToCartController = require("./addToCartController")

module.exports = {
  userController: new userController(),
  productController,
  addToCartController: new addToCartController()
}
