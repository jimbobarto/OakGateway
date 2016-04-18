var express = require('express');
var authController = require('../libs/auth.js');

var router = express.Router();

router.use(authController);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("Res: I've got a message");
});

router.post('/', function(req, res, next) {
    var publisher = require('../libs/publish.js');
    publisher.sendRequest("SimpleQueue", JSON.stringify(req.body));
    res.send("Res: I've posted a message - " + JSON.stringify(req.body));
});

module.exports = router;


