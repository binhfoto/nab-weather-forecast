pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Install') {
            steps {
                sh 'node --version'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test --watchAll=false'
            }
        }
    }
}