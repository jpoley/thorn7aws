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

            //@see https://gist.github.com/theotow/8577001
            var md5 = md5sum.update(data.Body).digest('binary');
            md5 = new Buffer(md5, "binary").toString('base64');

            return fullFill(md5);
        });
    });
}
