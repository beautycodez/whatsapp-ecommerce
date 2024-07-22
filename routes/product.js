const express = require('express');
const router = express.Router();
const utilities = require("../utilities")
const productController = require("../controllers/productController")

router.get("/category/:categoryId", utilities.handleErrors(productController.buildProductPage))

module.exports = router;