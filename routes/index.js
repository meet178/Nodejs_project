const express = require('express');
const appRouter = require('./app/users')
const productRouter = require('./app/product')
const addToCartRouter = require('./app/addToCart')
const orderRouter = require('./app/order')

const router = express.Router();

router.use('/app/user', appRouter);
router.use('/app/product', productRouter)
router.use('/addToCart', addToCartRouter)
router.use('/order', orderRouter)

module.exports = router;