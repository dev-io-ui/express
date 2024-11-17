const express = require('express');
const path = require('path');
const routes = express.Router();
const rootDir = require('../util/path');

routes.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = routes;