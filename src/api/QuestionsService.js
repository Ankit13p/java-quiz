import axios from 'axios'

class QuestionsService{
    retriveAllQuestions(){
        return  axios.get(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/all`);
    }

    retriveQuestion(id){
        return  axios.get(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/${id}`);
    }
    createQuestion(question){
        return  axios.post(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/load`, question);
    }
    updateQuestion(id, question){
        return  axios.put(`http://spring-boot-questions.ap-southeast-2.elasticbeanstalk.com/rest/questions/load/${id}`, question);
    }
}
export default new QuestionsService();