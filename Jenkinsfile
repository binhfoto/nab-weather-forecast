pipeline {
    agent {
        docker {
            image 'node:16.13.1-alpine'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'node --version'
                sh 'yarn --version'
                sh 'yarn install'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test --watchAll=false'
            }
        }
    }
}