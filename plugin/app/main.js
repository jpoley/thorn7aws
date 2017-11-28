'use strict';
const getHashByS3Objecgt = require('./tasks/gets3object.js');
const verifyHash = require('./tasks/processHash.js');
const processFile = require('./tasks/processFile.js');

function process(bucketName, objectKey) {
    getHashByS3Objecgt(bucketName, objectKey)
        .then(function(hash) {
            return verifyHash(hash);
            //console.log(hash);
        }).then(function(result) {
            return processFile(result);
        }).then(function(result) {
            console.log('finished result=> ', result);
        }).catch(function(err) {
            console.error('failied reason => ', err);
        });
}


function main() {
    //while
    while(true) {
        //polling dequeu sqs
        //if has task
        // do something
    }
}

//main();

//resolve by sqs
var bucketName = 'thorn7plugin';
var objectKey = 'kid.jpeg';

process(bucketName, objectKey);
