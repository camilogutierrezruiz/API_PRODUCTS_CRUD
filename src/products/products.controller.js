const Products = require('../models/products.model'); //TODO => IMPORT PRODUCT MODEL
const uuid = require('uuid'); //TODO => IMPORT UUID PACKAGE

//TODO => SET PRODUCTS CONTROLLERS =>

//* GET ALL PRODUCTS
const getAllProducts = async () => {
  const data = await Products.findAll();
  return data;
};

//* CREATE PRODUCT
const createProduct = async (newProduct) => {
  const data = await Products.create({
    id: uuid.v4(),
    name: newProduct.name,
    category: newProduct.category,
    price: newProduct.price,
    isAvailable: newProduct.isAvailable
  });
  return data;
};

//* GET PRODUCT BY ID
const getProductByID = async (id) => {
  const data = await Products.findOne({
    where: { id }
  })
  return data;
};

//* UPDATE PRODUCT BY ID
const updateProduct = async (id, productToUpdate) => {
  const data = await Products.update(productToUpdate, {
    where: { id }
  });
  return data;
};

//* DELETE PRODUCT
const deleteteProductByID = async (id) => {
  const data = await Products.destroy({
    where: { id }
  });
  return data;
};

//TODO => EXPORT ALL CONTROLLERS
module.exports = {
  getAllProducts,
  createProduct,
  getProductByID,
  updateProduct,
  deleteteProductByID
};