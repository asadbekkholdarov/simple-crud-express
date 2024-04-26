const Product = require("./../models/product.model");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.send({
      status: "success",
      result: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(500).send({
      status: "Failed",
      message: err,
    });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.send({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err,
    });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const fakeProduct = await Product.create(req.body);
    res.status(201).send({
      status: "Success",
      data: {
        fakeProduct,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};
exports.updateProducts = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.send({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(500).send({ status: "failed", message: err });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await Product.findByIdAndDelete(productId);
    if (!result) return res.status(500).send({ message: "Not Found" });
    res.send({ status: "successfully deleted" });
  } catch (err) {
    res.send({
      status: "failed",
      message: err,
    });
  }
};
