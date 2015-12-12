var express = require('express');
var authController = require('../controllers/auth.js');

var router = express.Router();

router.use(authController);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("Res: I've got a message");
});

router.post('/', function(req, res, next) {
    var publisher = require('../controllers/publish.js');
    publisher.sendRequest("SimpleQueue", "james likes pie");
    res.send("Res: I've posted a message - " + JSON.stringify(req.body));
});

module.exports = router;


