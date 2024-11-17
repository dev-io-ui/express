const path = require('path');
const rootDir = require('../util/path');


exports.getaddprodcut = (req,res,next)=>{
   
    res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postaddproduct =(req,res,next)=>{
    
    res.redirect('/');
};

exports.getproducts =(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
};