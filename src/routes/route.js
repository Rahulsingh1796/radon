const express = require('express');
const externalModule = require('../logger/logger');
const newRepo = require('../util/helper');


const router = express.Router();

router.get('/test-me', function (req, res) {
    
    res.send('My first ever api!')
    externalModule.welcome()
    newRepo.printDate()
    newRepo.printMonth()
    newRepo.getBatchInfo()

});

module.exports = router;
// adding this comment for no reason