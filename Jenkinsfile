pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Saifudheenpv/microservices-devops.git'
            }
        }
        stage('Build User Service') {
            steps {
                dir('user-service') {
                    sh 'npm install'
                    sh 'docker build -t saifudheenpv/user-service:latest .'
                }
            }
        }
        stage('Build Product Service') {
            steps {
                dir('product-service') {
                    sh 'npm install'
                    sh 'docker build -t saifudheenpv/product-service:latest .'
                }
            }
        }
        stage('Push User Service') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    sh 'docker push saifudheenpv/user-service:latest'
                }
            }
        }
        stage('Push Product Service') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    sh 'docker push saifudheenpv/product-service:latest'
                }
            }
        }
    }
}