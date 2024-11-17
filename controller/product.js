const path = require('path');
const rootDir = require('../util/path');
const Product = require('../models/product');


exports.getaddprodcut = (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postaddproduct = (req, res, next) => {

    const body = req.body.title;
    console.log(body);
    const product = new Product(body);

    product.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.error('Error saving product:', err);
        });
};

exports.getproducts = (req, res, next) => {

    Product.fetchAll().then((products) => {
        console.log('productlist',products);
        { products };
        res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    });





};