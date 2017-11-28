Overview
========

This Repo is responsible for creating an initial AMI.  The AMI is bootstrapped with Chef.

Subsequent terraforms of this image require the setting of:
- A new node name
- A new certificate
- Assosciation of the node with the chef-automate server 

Association and AWS interaction is done using the Jenkins IAM user with rights to access S3 and basic admin with OpsWorks.

