provider "aws" {
  region = var.aws_region
}

# Security group for the EC2 instance
resource "aws_security_group" "app_sg" {
  name        = "express-app-sg"
  description = "Allow HTTP and SSH traffic"

  # Allow HTTP traffic
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "HTTP"
  }

  # Allow SSH access
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "SSH"
  }

  # Allow outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "express-app-sg"
  }
}

# SSH key for EC2 access
resource "aws_key_pair" "deployer" {
  key_name   = "express-app-key"
  public_key = var.ssh_public_key
}

# EC2 instance
resource "aws_instance" "app_server" {
  ami           = var.ami_id
  instance_type = var.instance_type
  
  key_name               = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.app_sg.id]
  
  user_data = <<-EOF
              #!/bin/bash
              # Update system
              sudo yum update -y
              
              # Install Docker
              sudo yum install -y docker
              sudo systemctl start docker
              sudo systemctl enable docker
              sudo usermod -a -G docker ec2-user
              
              # Install Docker Compose
              sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
              sudo chmod +x /usr/local/bin/docker-compose
              
              # Install Git
              sudo yum install -y git
              
              # Create app directory
              mkdir -p /home/ec2-user/app
              
              # Set appropriate permissions
              sudo chown -R ec2-user:ec2-user /home/ec2-user/app
              EOF
  
  tags = {
    Name = "express-app-server"
  }
}

# Output the public IP address
output "instance_public_ip" {
  value = aws_instance.app_server.public_ip
}