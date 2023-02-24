const userService = require('./userservice')
const productService = require('./productservice')
const addToCartService = require("./addToCartService")
const orderService = require('./orderService')

module.exports = {
    userService: new userService(),
    productService: new productService(),
    addToCartService: new addToCartService(),
    orderService: new orderService()
}
