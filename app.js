//core modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


//my module custom
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactusRoute = require('./routes/contact-us');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminRoute); 
app.use(shopRoute);
app.use(contactusRoute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(4000);