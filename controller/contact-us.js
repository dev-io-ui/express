const path = require('path');
const rootDir = require('../util/path');

exports.getcontactus =(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
};

exports.postcontactus =(req,res,next)=>{
    res.redirect('/success');
};

exports.getsuccess =(req,res,next)=>{
    res.send(`<h1>form submitted succesfully</h1>`);
};