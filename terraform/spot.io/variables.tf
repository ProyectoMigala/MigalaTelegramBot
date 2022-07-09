# aws
variable "sg_name" {
  description = "Security Group Name"
}

variable "aws_profile" {
  description = "AWS Profile"
}

# aws and spotinst
variable "key_name" {
  description = "Key Pair Name"
}

# spotinst
variable "aws_region" {
  description = "Region on AWS to Deploy"
}

variable "instance_name" {
  description = "Instance Name"
}
