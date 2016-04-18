var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("In consume");
    var publisher = require('../libs/publish.js');
    var report;
    publisher.consumeMessage("Results", report);

    console.log("Report: " + report);
});

module.exports = router;
