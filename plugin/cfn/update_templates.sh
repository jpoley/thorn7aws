#!/bin/bash

# If CFN templates are updated, run this script to upload them to the S3 bucket for the create_stack.sh script

PROFILE="$1"
REGION="$2"
BUCKET="$3"

aws --profile "${PROFILE}" --region "${REGION}" s3 cp . "s3://${BUCKET}/cfn/" --recursive --include "*.yml" --exclude "*.sh" --exclude "*.md" --exclude "*.json"
