#!/bin/bash

aws --profile personal_bmurphey --region us-east-1 s3 cp . s3://2017thorn7-bm/cfn/ --recursive --include "*.yml" --exclude "*.sh" --exclude "troubleshooting_notes" --exclude "*.swp"
