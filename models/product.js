const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');


module.exports = class Product 
{
    constructor(title)
    {
        this.title =title;
    }

    save()
    {
        const p = path.join(path.dirname(process.mainModule.filename),'data','product.json');

        return new Promise((resolve, reject) => {
        fs.readFile(p,(err,fileContent)=>{
            let products = [];
            if(!err)
            {
                products = JSON.parse(fileContent);
            }
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) =>{
                
                if(err)
                {
                    reject(err);
                }
                else 
                {
                    resolve();
                }
            });
        });
    });
    }
    static fetchAll() {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'product.json');
    
        return new Promise((resolve, reject) => {
            fs.readFile(p, (err, fileContent) => {
                if (err) {
                    resolve([]); 
                } else {
                    resolve(JSON.parse(fileContent)); 
                }
            });
        });
    }
    

}