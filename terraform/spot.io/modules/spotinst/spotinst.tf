# Create a Manged Instance
resource "spotinst_managed_instance_aws" "migala_bot_managed_instance" {
  name        = var.instance_name
  description = "Created by Terraform - MigalaTelegramBots"
  product     = "Linux/UNIX"

  region     = var.aws_region
  subnet_ids = var.subnet_ids
  vpc_id     = var.vpc_id

  persist_root_device   = "true"
  persist_block_devices = "false"

  instance_types = [
    "t2.micro",
  ]
  preferred_type = "t2.micro"

  image_id           = var.image_id
  security_group_ids = [var.security_group_id]
  key_pair           = var.key_name

  user_data = file("${path.module}/files/user_data.sh")

  cpu_credits = "standard"

  tags {
    key   = "Name"
    value = var.instance_name
  }

  resource_tag_specification {
    should_tag_enis = true
    should_tag_volumes = true
    should_tag_snapshots = true
    should_tag_amis = true
  }
}
