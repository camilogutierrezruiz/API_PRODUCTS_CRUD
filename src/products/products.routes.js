const productsServices = require('./products.services');
const router = require('express').Router();

//TODO => SET PRODUCTS ROUTES
router.get('/', productsServices.getProducts);
router.post('/', productsServices.postProduct);
router.get('/:id', productsServices.getOneProduct);
router.patch('/:id', productsServices.patchProduct);
router.delete('/:id', productsServices.delOneProduct);

module.exports = router;