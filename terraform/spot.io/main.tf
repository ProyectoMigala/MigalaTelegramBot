terraform {
  required_providers {
    spotinst = {
      source = "spotinst/spotinst"
      version = "1.79.0"
    }
  }
}

provider "spotinst" {
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

module "aws" {
  source   = "./modules/aws"
  sg_name  = var.sg_name
  key_name = var.key_name
}

module "spotinst" {
  source             = "./modules/spotinst"
  key_name           = var.key_name
  aws_region         = var.aws_region
  instance_name      = var.instance_name
  subnet_ids         = module.aws.subnet_ids
  vpc_id             = module.aws.vpc_id
  image_id           = module.aws.image_id
  security_group_id  = module.aws.security_group_id
}
