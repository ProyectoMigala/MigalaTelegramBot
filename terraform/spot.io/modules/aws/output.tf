output "subnet_ids" {
  value       = data.aws_subnets.default.ids
  description = "Subnet ids"
}

output "vpc_id" {
  value       = data.aws_vpc.default.id
  description = "VPC id"
}

output "image_id" {
  value       = data.aws_ami.ubuntu.id
  description = "Image id"
}

output "security_group_id" {
  value       = aws_security_group.migala_bot_sg.id
  description = "Security Groups id"
}
