variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  type        = string
  default     = "ami-0c7217cdde317cfec"  
}

variable "ssh_key_path" {
  description = "Path to your public SSH key"
  type        = string
  default     = "ssh_key.pub"
}

variable "ssh_public_key" {
  description = "Content of your public SSH key"
  type        = string
  default     = ""
}

variable "resource_prefix" {
  description = "Prefix to add to resource names to avoid conflicts"
  type        = string
  default     = ""
}