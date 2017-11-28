'use strict';
const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

const getHashByS3Object = require('./tasks/getHash.js');
const verifyHash = require('./tasks/verifyHash.js');
const processFile = require('./tasks/processFile.js');

const SQS_DEQUE_INTERVAL_SEC = 2000;

function process(bucketName, objectKey) {
    getHashByS3Object(bucketName, objectKey)
        .then(function(hash) {
            return verifyHash(hash);
            //console.log(hash);
        }).then(function(result) {
            return processFile(result, bucketName, objectKey);
        }).then(function(result) {
            if (result.matched === false) {
                return console.log('safe files.');
            }

            return console.log('matched bad file [s3-destPath] => ', result.s3DestPath, '[hash]=>' , result.hash);
        }).catch(function(err) {
            return console.error('failied reason => ', err);
        });
}


function main() {
    const Consumer = require('sqs-consumer');
    const app = Consumer.create({
        queueUrl: 'https://sqs.us-east-1.amazonaws.com/561275206473/thorn_scale', /* required */
        handleMessage: (message, done) => {
            console.log(message);

            //do some work with `message`
            var bucketName = 'thorn7plugin';
            var objectKey = 'kid.jpeg';

            process(bucketName, objectKey);
            done();
        }
    });

    app.start();
}


var bucketName = 'thorn7plugin';
var objectKey = 'kid.jpeg';
process(bucketName, objectKey);

//TODO switch if production
//main();
