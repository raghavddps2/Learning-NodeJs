const express = require('express');
const path = require('path');
const setDir = require('../util/path');
const router = express.Router();
router.get('/users',(req,res,next)=>{
    res.sendFile(path.join(setDir,'views','users.html'));
});

module.exports = router;