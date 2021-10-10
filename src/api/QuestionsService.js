import axios from 'axios'

class QuestionsService{
    retriveAllQuestions(){
        return  axios.get(`http://quizapi.brainyfool.com/rest/questions/all`);
        // return  axios.get(`http://ec2-3-25-223-98.ap-southeast-2.compute.amazonaws.com:8080/rest/questions/all`);
    }

    retriveQuestion(id){
        return  axios.get(`http://quizapi.brainyfool.com/rest/questions/${id}`);
        // return  axios.get(`http://localhost:8080/rest/questions/${id}`);
        // return  axios.get(`http://ec2-3-25-223-98.ap-southeast-2.compute.amazonaws.com:8080/rest/questions/${id}`);
    }
    createQuestion(question){
        return  axios.post(`http://quizapi.brainyfool.com/rest/questions/load`, question);
        // return  axios.post(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/load`, question);
    }
    updateQuestion(id, question){
        return  axios.put(`http://quizapi.brainyfool.com/rest/questions/${id}`, question);
        // return  axios.put(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/load/${id}`, question);

      //  return  axios.get(`http://localhost:8080/rest/questions/all`);
        // return  axios.get(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/all`);
    }

    // retriveQuestion(id){
    //     return  axios.get(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/${id}`);
    // }
    // createQuestion(question){
    //     return  axios.post(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/load`, question);
    // }
    // updateQuestion(id, question){
    //     return  axios.put(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/load/${id}`, question);

    // }
}
export default new QuestionsService();
