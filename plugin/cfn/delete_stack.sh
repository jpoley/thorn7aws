#!/bin/bash

PROFILE="$1"
REGION="$2"
STACK_NAME="$3"

aws --profile "${PROFILE}" --region "${REGION}" cloudformation delete-stack --stack-name "${STACK_NAME}"
