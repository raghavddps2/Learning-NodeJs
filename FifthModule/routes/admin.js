const path = require('path');
const express = require('express');

const router = express.Router();
const rootDir = require('../util/path');
router.use('/add-product',(req,res,next)=>{
    // res.send('<h1>You can add the product here.</h1><form action="/admin/product" method="POST"><input type="text" name="product"><button type="submit">Add product</button></form>');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    var myObj = req.body;
    res.redirect('/'); 

});

module.exports = router;