# Express DevOps Demo

A simple Express.js application designed for learning DevOps concepts.

## Features

- Express.js REST API
- PostgreSQL database integration
- Docker containerization
- NGINX reverse proxy
- GitHub Actions CI/CD pipeline
- Terraform infrastructure as code for AWS deployment

## Prerequisites

- Node.js 18+
- pnpm
- Docker and Docker Compose
- Terraform (for deployment)
- AWS CLI (configured with credentials)

## Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/express-devops-demo.git
   cd express-devops-demo
   ```

2. Run the setup script:

   ```bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

3. Start the development environment:

   ```bash
   docker-compose up
   ```

4. Access the API at http://localhost:80

## Testing

Run tests with:

```bash
pnpm test
```

## Deployment

### Manual Deployment

```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

### CI/CD Deployment

Push changes to the main branch to trigger the GitHub Actions workflow.

## Infrastructure

To deploy the infrastructure manually:

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

## License

w
