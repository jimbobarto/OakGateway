var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("In consume");
    var publisher = require('../controllers/publish.js');
    var report = publisher.consumeMessage("Results");
    console.log("Report: " + report);
    res.send("Res: I've consumed a message - " + report);
});

module.exports = router;
