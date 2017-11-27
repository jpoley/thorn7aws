const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports= function(bucketName, objectKey) {
    return new Promise(function(fullFill, rejct) {
        fullFill('ok');
    });
}
