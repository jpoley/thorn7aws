'use strict';

var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = function(event, context, callback) {
    console.log(event)
    var params = {
        Bucket: event.bucket
    }

    s3.listObjects(params, function (err, data) {
        if(err)throw err;

        // for each object in bucket
        // data.Contents.forEach(function(item){
        //     // create array of requests
        //     var dfd = Q.defer()    
        // })

        s3.getObject({
            Bucket: params.Bucket,
            Key: data.Contents[0].Key
        }, function (err, data) {
            if(err)throw err;
            console.log(“MD5: ” + md5sum.digest(data));
            callback(null,{msg: “All worked fine.“})
        })
    });
};
