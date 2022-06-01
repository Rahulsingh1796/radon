const express = require('express');
const externalModule = require('../logger/logger');
const newRepo = require('../util/helper');
const newRepo1=require('../validator/formatter');


const router = express.Router();

router.get('/test-me', function (req, res) {
    
    res.send('My first ever api!')
    externalModule.welcome()
    newRepo.printDate()
    newRepo.printMonth()
    newRepo.getBatchInfo()
    newRepo1.Trim()
    newRepo1.changetoLowerCase()
    newRepo1.changeToUpperCase()

});

module.exports = router;
// adding this comment for no reason