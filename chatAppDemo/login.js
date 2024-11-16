const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { LocalStorage } = require('node-localstorage');
const { isUtf8 } = require('buffer');

const app = express();
app.use(bodyParser.urlencoded({ urlencoded: true }));

app.get('/', (req, res, next) => {
    fs.readFile('messagefile.txt',(err ,data)=>{
        if(err)
        {
            console.log(err);
        }
        {data} res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action='/' method='POST'>
          
          <input type='text' id='message' name='message'>
           <input type='hidden' id='username' name='username'>
          <button type='submit'>send here</button>
          </form>`);
    })
    
});


app.post('/', (req, res, next) => {

    const username = req.body.username;
    const message = req.body.message;
    fs.writeFile("messagefile.txt",`${username}:${message}`,{flag:'a'},(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.redirect('/');
        }
    })
    
    app.get('/login',(req,res,next)=>{

        res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action='/login' method='POST' '>
          
            <input type='text' id='username' name='username' id='username'>
             
            <button type='submit'>login here</button>
            </form>`);
    });

    app.post('/login',(req,res)=>{
        res.redirect('/');
    })
});



app.listen(1234);