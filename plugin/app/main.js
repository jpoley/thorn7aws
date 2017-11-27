'use strict';
const getMd5ByS3Object = require('./tasks/gets3object.js');
var bucketName = 'thorn7plugin';
var objectKey = 'kid.jpeg';

getMd5ByS3Object(bucketName, objectKey).then(function(msg) {
    console.log(msg);
});


function verifyMd5ByHttp() {
}

function archivedBatdImage() {
}



//while

//
//
