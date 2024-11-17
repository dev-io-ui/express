const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const routes = express.Router();

// /admin/add-product
routes.get('/add-product',(req,res,next)=>{
   
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});
// /admin/add-product
routes.post('/add-product',(req,res,next)=>{
    
    res.redirect('/');
});

module.exports = routes;