const express = require("express");
const productController = require("./../controllers/product.controllers");
const router = express.Router();
router
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);
router
  .route("/:id")
  .get(productController.getProduct)
  .put(productController.updateProducts)
  .delete(productController.deleteProduct);

module.exports = router;
