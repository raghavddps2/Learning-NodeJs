const express = require('express');
const router = express.Router();
const path = require('path');
const setDir = require('../util/path');
router.get('/admin',(req,res,next)=>{
    res.sendFile(path.join(setDir,'views','admin.html'));
});

router.post('/dash',(req,res,next)=>{
    res.redirect('/'); 

});
module.exports = router;