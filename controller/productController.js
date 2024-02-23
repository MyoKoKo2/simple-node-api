const productModel = require("../models/product_model.js");

// get products
const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({ products, count: products.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// create products
const createProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(500).json({ error: "id not defined ?" });
    }

    const product = await productModel.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(200).json({ message: "product not found ? " });
    }

    const updateProduct = await productModel.findById(id);
    res.status(200).json({ message: "prouct update success", updateProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete products
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({ message: "product delete success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get single
const getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingle,
};
