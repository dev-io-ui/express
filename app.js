const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    console.log("in the middleware");
    res.send(`<form action='/product' method='POST'>title<input type='text' name='title'></inpt>size<input type='text' name='size'></inpt><button type='submit'>add</button>`);

});
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send(`<h1>home page</h1>`);
});

app.listen(4000);