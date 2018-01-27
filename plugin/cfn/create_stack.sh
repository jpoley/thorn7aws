#!/bin/bash

# Create stack from the templates in the S3 bucket (created with bootstrap.sh)

PROFILE="$1"
REGION="$2"
STACK_NAME="$3"
TEMPLATES_BUCKET="$4"

aws --profile "${PROFILE}" --region "${REGION}" cloudformation create-stack --stack-name "${STACK_NAME}" --template-url "https://s3.amazonaws.com/${TEMPLATES_BUCKET}/cfn/main.yml" --capabilities CAPABILITY_IAM --parameters file://./parameters.json
