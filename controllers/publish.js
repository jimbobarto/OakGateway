var amqp = require('amqplib/callback_api');

var connReady = false;
var conn, ch;

exports.start = function() {
    amqp.connect('amqp://localhost:5672', function (err, connection) {
        conn = connection;
        connReady = true;
        conn.createChannel(function (err, channel) {
            ch = channel;
        });
    });
};

exports.sendRequest = function(queue, message) {
    if(connReady) {
        var ex = '';

        ch.publish(ex, queue, new Buffer(message));
        console.log(" [x] Sent %s: '%s'", queue, message);
    }
};

