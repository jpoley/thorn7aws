# SETUP PROCESS

# Requirements:
aws cli (pip install awscli)

### Hint 1: If you don't have multiple AWS credential profiles, use `default` for PROFILE
### Hint 2: If you make changes to the CloudFormation templates, be sure to run `update_templates.sh` before running `create_stack.sh` again

## Step 1: Create bucket for CloudFormation template:
```
bootstrap.sh PROFILE REGION TEMPLATES_BUCKET
```

## Step 2: Upload templates to S3:
```
update_templates.sh P ROFILE REGION TEMPLATES_BUCKET
```

## Step 3: Populate parameters.json
* `pThornInstanceType`: The EC2 instance type for the THORN instance
* `pThornKeyPair`: The SSH key pair for the THORN instance
* `pThornInstanceSubnet`: The subnet ID to place the THORN instance in
* `pThornAMI`: The AMI ID to build the THORN instance from
* `pThornNameTag`: The value for the Name tag of the THORN instance
* `pS3TemplatesBucket`: The S3 bucket for the CloudFormation templates
* `pAlarmEmail`: The email address for notifications
* `pBucketToMonitor`: The S3 bucket to create for monitoring

## Step 4: Create the THORN CloudFormation stack:
```
create_stack.sh PROFILE REGION STACK_NAME TEMPLATES_BUCKET
```

## To delete the stack:
```
delete_stack.sh PROFILE REGION STACK_NAME
```
