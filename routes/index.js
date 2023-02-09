const express = require("express");
const appRouter = require("./app/users")
const router = express.Router();

router.use("/app", appRouter);

module.exports = router;