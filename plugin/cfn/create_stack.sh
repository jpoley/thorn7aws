#!/bin/bash

aws --profile personal_bmurphey --region us-east-1 cloudformation create-stack --stack-name thorn-main-test --template-url https://s3.amazonaws.com/2017thorn7-bm/cfn/main.yml --capabilities CAPABILITY_IAM --parameters ParameterKey=pThornInstanceType,ParameterValue=t2.micro ParameterKey=pThornInstanceSubnet,ParameterValue=subnet-02e87c5a ParameterKey=pThornKeyPair,ParameterValue=thorn ParameterKey=pThornAMI,ParameterValue=ami-55ef662f ParameterKey=pThornNameTag,ParameterValue=THORN
