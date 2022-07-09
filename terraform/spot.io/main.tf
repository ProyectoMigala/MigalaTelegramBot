# Configure the Spotinst provider
provider "spotinst" {
  token   = var.spotinst_token
  account = var.spotinst_account
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

module "aws" {
  source = "./modules/aws"
  region = var.aws_region
}
