const path = require('path');
const express = require('express');

const adminData = require('./admin');
const router = express.Router();
const rootDir = require('../util/path');
router.get('/',(req,res,next)=>{
    // res.send('<h1>this is the normal route!</h1>');
    // console.log(adminData.products);
    // // res.sendFile(path.join(rootDir,'views','shop.html'));
    const products = adminData.products
    res.render('shop',{prods: products, docTitle:'Shopify!'});
}); 


module.exports = router;