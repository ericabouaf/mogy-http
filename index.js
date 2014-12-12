
var request = require('request');

exports.http = function (input, config, cb) {

    // Combine input & config
    var r = {}, k;
    for(k in input) {
        r[k] = input[k];
    }
    if(config) {
        for(k in config) {
            r[k] = config[k];
        }
    }

    request(r, function (err, response, body) {
        if(err) {
            return cb(err, body);
        }

        cb(null, {
            body: body,
            statusCode: response.statusCode,
            headers: response.headers
        });
    });

};
