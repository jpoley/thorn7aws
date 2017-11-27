const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const crypto = require('crypto');
const md5sum = crypto.createHash('md5');

module.exports= function(bucketName, objectKey) {
    return new Promise(function(fullFill, reject) {
        s3.getObject({
            Bucket: bucketName,
            Key: objectKey
        }, function(err, data) {
            if (err) {
                return reject(err);
            }

            var b = md5sum.digest(data);
            var hash = b.toString('utf-8');

            return fullFill(hash);
        });
    });
}
