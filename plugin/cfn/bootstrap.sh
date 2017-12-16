#!/bin/bash

# Create S3 bucket for CloudFormation templates

PROFILE="$1"
REGION="$2"
BUCKET="$3"

aws --profile "${PROFILE}" --region "${REGION}" s3 mb s3://"${BUCKET}"
