const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const objectPrefix = 'matched/';

module.exports = function(response, bucketName, sourceObjectKey) {
    return new Promise(function(fullfill, reject) {
        if (!response.matched) {
            return fullfill({matched: false});
        }

        const destPath = objectPrefix + sourceObjectKey;
        const params = {
            Bucket: bucketName,
            Key: destPath,
            Body: response.binary,
        };

        s3.putObject(params, function(err, data) {
            if (err) {
                return reject(err);
            }

            return fullfill({
                matched: true,
                s3DestPath: destPath,
                hash: response.hash,
            });
        });
    });
}
