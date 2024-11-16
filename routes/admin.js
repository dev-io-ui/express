const express = require('express');

const routes = express.Router();

// /admin/add-product
routes.get('/add-product',(req,res,next)=>{
    console.log("in the middleware");
    res.send(`<form action='/admin/add-product' method='POST'>title<input type='text' name='title'></inpt>size<input type='text' name='size'></inpt><button type='submit'>add</button>`);

});
// /admin/add-product
routes.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = routes;