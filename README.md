Microservices DevOps Project
This project demonstrates a complete DevOps pipeline for a microservices-based web application using Node.js, Docker, Kubernetes, Jenkins, Terraform, and Prometheus/Grafana.
Project Structure

user-service/: Node.js microservice for user management.
product-service/: Node.js microservice for product management.

Setup Instructions

Clone the repository: git clone https://github.com/Saifudheenpv/microservices-devops.git
Navigate to each service and test locally:cd user-service
npm install
npm start


Build and run Docker containers:cd user-service
docker build -t user-service:latest .
docker run -p 3000:3000 user-service:latest



More phases (CI/CD, Kubernetes, monitoring) will be added as the project progresses.
Status

Phase 1: Microservices and Docker setup completed.
Phase 2: Version control and project structure in progress.

