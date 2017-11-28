const AWS = require('aws-sdk');
const path = require('path');
const s3 = new AWS.S3();

const objectPrefix = 'matched/';

module.exports = function(response, bucketName, sourceObjectKey) {
    return new Promise(function(fullfill, reject) {
        if (!response.matched) {
            return fullfill({matched: false});
        }

        const ext = path.extname(sourceObjectKey);
        const destPath = objectPrefix + response.hash + ext;
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
