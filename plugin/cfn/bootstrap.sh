#!/bin/bash

Create S3 bucket

BUCKET_NAME="$1"


aws --profile personal_bmurphey --region us-east-1 s3 mb "${BUCKET_NAME}"
