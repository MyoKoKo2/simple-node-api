const express = require("express");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingle,
} = require("../controller/productController.js");
const router = express.Router();

// get products
router.get("/", getProducts);

router.get("/:id", getSingle);

router.put("/:id?", updateProduct);

// create products

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
