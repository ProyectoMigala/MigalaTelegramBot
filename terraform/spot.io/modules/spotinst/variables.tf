variable "key_name" {
  description = "Key Pair Name"
}

variable "aws_region" {
  description = "Region on AWS to Deploy"
}

variable "instance_name" {
  description = "Instance Name"
}

variable "subnet_ids" {
  description = "Subnet ids"
}

variable "vpc_id" {
  description = "VPC id"
}

variable "image_id" {
  description = "Image id"
}

variable "security_group_id" {
  description = "Security Groups id"
}
