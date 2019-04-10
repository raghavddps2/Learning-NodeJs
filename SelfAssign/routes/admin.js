const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path')


const emails = [];
router.get('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','admin.html'));
    res.render('admin');
});

router.post('/add-product',(req,res,next)=>{
    emails.push(req.body.email);
    console.log(req.body);
    res.redirect('/add-product');
});

exports.routes = router;
exports.emails = emails;
