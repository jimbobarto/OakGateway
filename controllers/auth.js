var auth = require('basic-auth');
var nconf = require('nconf');

// First consider commandline arguments and environment variables, respectively.
nconf.argv().env();

module.exports = function(req, res, next) {

    var user = auth(req);
    if (!user || nconf.get('AUTH_NAME') !== user.name || nconf.get('AUTH_PASSWORD') !== user.pass) {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send();
    }
    return next();
};
