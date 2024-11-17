const express = require('express');
const path = require('path');
const routes = express.Router();
const productsController = require('../controller/product');

routes.get('/', productsController.getproducts);

module.exports = routes;