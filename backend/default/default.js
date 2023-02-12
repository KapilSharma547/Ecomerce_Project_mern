const Product = require("../models/ProductModel");
const products = require("../data/products");

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Data imported SuccesFull");
  } catch (error) {
    console.log("Error", error.message);
  }
};

module.exports = { DefaultData };
