const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const productsList = require('./admin');

const rootDir = require('../util/path');

router.get('/shopping',(req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop',{emails: productsList.emails});
    console.log(productsList.emails);
});


module.exports = router;