# DevOps Project Two

A Node.js application with complete CI/CD pipeline and infrastructure as code.

## Features

- Express.js REST API
- Docker containerization
- GitHub Actions CI/CD pipeline
- Terraform infrastructure as code for AWS deployment
- Automated testing and deployment
- Infrastructure provisioning

## Architecture

- **Frontend/Backend**: Node.js Express application
- **Infrastructure**: AWS EC2 with Docker
- **CI/CD**: GitHub Actions workflow
- **IaC**: Terraform for AWS resource provisioning

## Prerequisites

- Node.js 18+
- pnpm package manager
- Docker and Docker Compose
- Terraform
- AWS account with configured credentials
- GitHub account

## Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/nishantchy/DevOps-Project2.git
   cd DevOps-Project2
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run locally:
   ```bash
   pnpm dev
   ```

## Infrastructure Setup

The project uses Terraform to provision AWS infrastructure:

1. Navigate to the terraform directory:

   ```bash
   cd terraform
   ```

2. Initialize Terraform:

   ```bash
   terraform init
   ```

3. Generate an SSH key pair (if not already done):

   ```bash
   ssh-keygen -t rsa -b 2048 -f terraform-key
   ```

4. Apply Terraform configuration:

   ```bash
   terraform apply -var="ssh_public_key=$(cat terraform-key.pub)"
   ```

5. After deployment, Terraform will output the EC2 instance's public IP address.

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:

1. Runs tests on every pull request and push to main
2. Deploys infrastructure and application when code is merged to main

### GitHub Secrets Required

- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `SSH_PUBLIC_KEY`: Content of your SSH public key

## File Structure

- `.github/workflows/`: CI/CD pipeline configuration
- `src/`: Application source code
- `tests/`: Test files
- `terraform/`: Infrastructure as code
  - `main.tf`: Main Terraform configuration
  - `variables.tf`: Variable definitions
- `docker-compose.yml`: Local development setup
- `Dockerfile`: Application containerization

## Important Files

- `terraform.tfstate`: Tracks the state of your infrastructure (never delete)
- `terraform-key`: SSH private key for EC2 access (keep secure, not committed to git)
- `terraform-key.pub`: SSH public key for EC2 access

## Deployment Process

1. Changes are pushed to GitHub
2. GitHub Actions runs tests
3. If tests pass and the branch is main, Terraform creates/updates AWS infrastructure
4. The application is deployed to the EC2 instance

## Accessing the Application

After deployment, access the application at:

```
http://<EC2-Public-IP>
```

You can find the IP address in the Terraform output or AWS Console.

## SSH Access to EC2

```bash
ssh -i terraform-key ec2-user@<EC2-Public-IP>
```

## Project Maintenance

- To update infrastructure: Modify Terraform files and push changes
- To update application: Modify source code and push changes
- To destroy infrastructure: Run `terraform destroy`
