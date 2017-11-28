'use strict';
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
            console.error('failied reason => ', err);
        });
}


function main() {
    //polling deque sqs

    //if has task
        //do something

    setTimeout(function() {
        main();
    }, SQS_DEQUE_INTERVAL_SEC);
}

//resolve by sqs
var bucketName = 'thorn7plugin';
var objectKey = 'kid.jpeg';

process(bucketName, objectKey);



//main();
