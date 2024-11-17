const express = require('express');
const path = require('path');
const routes = express.Router();
const rootDir = require('../util/path');

routes.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
});

routes.post('/contact-us',(req,res,next)=>{
    res.redirect('/success');
});
routes.get('/success',(req,res,next)=>{
    res.send(`<h1>form submitted succesfully</h1>`);
})

module.exports = routes;