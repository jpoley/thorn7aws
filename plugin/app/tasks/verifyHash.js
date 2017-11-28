const request = require('request');

module.exports = function(hash) {
    return new Promise(function(fullfill, reject) {
        //TODO extract env variables
        const endpoint = 'https://nnkiymcph7.execute-api.us-east-1.amazonaws.com/dev';

        const options = {
            uri: endpoint + '?hash=' + hash,
        };

        request.get(options, function(err, response, body) {
            if (err) {
                return reject(err);
            }
            console.log(body);

            return fullfill(body);
        });
    });
}
