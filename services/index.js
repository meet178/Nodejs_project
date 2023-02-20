const userService = require('./userservice')
const productService = require('./productservice')

module.exports = {
    userService: new userService(),
    productService: new productService(),
}
