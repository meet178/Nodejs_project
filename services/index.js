const userService = require('./userservice')
const productService = require('./productservice')
const addToCartService = require("./addToCartService")

module.exports = {
    userService: new userService(),
    productService: new productService(),
    addToCartService: new addToCartService()
}
