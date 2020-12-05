pipeline {
   stages{
      stage('Create docker image') {
          steps{
             sh 'docker build -t khadijadev/blogApp:v1.0.0'
          }
      }
      stage('Push docker image'){
        steps{
           withCredentials([string(credentialsId: 'docker-p', variable: 'dockerpwd')]){
              sh "docker login -u khadijadev -p ${dockerpwd}"
              sh 'docker push khadijadev/blogApp:v1.0.0'
           }
        }
      }
      stage("create kubernetes images"){
          steps{
              echo "====++++executing A++++===="
          }
      }
   }
}