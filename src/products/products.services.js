//TODO => IMPORT PRODUCTS CONTROLLER
const productsController = require('./products.controller');

//TODO =>  SET SERVICES
//* GET PRODUCTS FROM GETALLPRODUCTS CONTROLLER
const getProducts = (req, res) => {
  productsController.getAllProducts()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      });
    });
};

//* POST PRODUCTS FROM CREATEPRODUCT CONTROLLER
const postProduct = (req, res) => {
  const newProduct = req.body;

  if (
    newProduct.name &&
    newProduct.category &&
    newProduct.price &&
    newProduct.isAvailable
  ) {
    productsController.createProduct(newProduct)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(400).json({
          message: err.message
        });
      });
  } else {
    res.status(400).json({
      message: 'Missing data'
    });
  };
};

//* GET ONE PRODUCT FROM GETPRODUCTBYID CONTROLLER
const getOneProduct = (req, res) => {
  const productId = req.params.id;
  productsController.getProductByID(productId)
    .then(data => {
      data
        ? res.status(200).json(data)
        : res.status(400).json({
          message: 'Invalid ID'
        });
    })
    .catch(err => {
      res.status(404).json({
        message: err.message
      });
    });
};

//* PATCH ONE PRODUCT FROM UPDATEPRODUCT CONTROLLER
const patchProduct = (req, res) => {
  const productId = req.params.id;
  const productUpdated = {
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    isAvailable: req.body.isAvailable
  };
  productsController.updateProduct(productId, productUpdated)
    .then(data => {
      data[0]
        ? res.status(200).json({
          message: `Product ${productId} has been updated succesfully`
        })
        : res.status(400).json({
          message: 'Invalid ID'
        });
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      });
    });
};

//* DEL ONE PRODUCT FROM DELETEPRODUCTBYID CONTROLLER
const delOneProduct = (req, res) => {
  const productId = req.params.id;
  productsController.deleteteProductByID(productId)
    .then(data => {
      data[0]
        ? res.status(204).json()
        : res.status(200).json({
          message: 'Invalid ID'
        });
    })
    .catch(err => {
      res.status(400).json({
        message: err.message
      });
    });
};

module.exports = {
  getProducts,
  postProduct,
  getOneProduct,
  patchProduct,
  delOneProduct
};