'use strict';
const getMd5ByS3Object = require('./tasks/gets3object.js');

//resolve by sqs
var bucketName = 'thorn7plugin';
var objectKey = 'kid.jpeg';

getMd5ByS3Object(bucketName, objectKey).then(function(msg) {
    console.log(msg);
});

function verifyMd5ByHttp() {
}

function archivedImageIfMatched() {
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
