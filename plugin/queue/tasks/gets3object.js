const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports= function(bucketName, objectKey) {
    return new Promise(function(fullFill, rejct) {
        s3.getObject({
            Bucket: bucketName,
            key: objectKey
        });

        fullFill('ok');
    });
}
