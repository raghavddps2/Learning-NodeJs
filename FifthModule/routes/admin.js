const path = require('path');
const express = require('express');

const router = express.Router();
const rootDir = require('../util/path');

var products = [];
router.get('/add-product',(req,res,next)=>{
    // res.send('<h1>You can add the product here.</h1><form action="/admin/product" method="POST"><input type="text" name="product"><button type="submit">Add product</button></form>');
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product',{docTitle: 'Add Product'});
});

router.post('/add-product',(req,res,next)=>{
    products.push({title: req.body.title});
    console.log(req.body);
    var myObj = req.body;
    res.redirect('/'); 

});

exports.routes = router;
exports.products = products;