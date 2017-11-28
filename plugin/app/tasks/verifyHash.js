const request = require('request');

module.exports = function(params) {
    return new Promise(function(fullfill, reject) {
        //TODO extract env variables
        const endpoint = 'https://nnkiymcph7.execute-api.us-east-1.amazonaws.com/dev';

        const options = {
            uri: endpoint + '?hash=' + params.hash,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        request.get(options, function(err, response, body) {
            if (err) {
                return reject(err);
            }

            const json = JSON.parse(body);
            if (json.result.match == 0) {
                // not match
                return fullfill({matched: false});
            }

            return fullfill({
                matched: true,
                binary: params.binary,
                hash: params.hash
            });
        });
    });
}
