const express = require('express');

const routes = express.Router();
const productsController = require('../controller/product');

// /admin/add-product
routes.get('/add-product',productsController.getaddprodcut);
// /admin/add-product
routes.post('/add-product', productsController.postaddproduct );

module.exports = routes;