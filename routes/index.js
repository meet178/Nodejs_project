const express = require("express");
const appRouter = require("./app/users")
const productRouter = require("./app/product")
const router = express.Router();

router.use("/app/user", appRouter);
router.use("/app/product", productRouter)

module.exports = router;