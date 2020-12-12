import axios from 'axios'

class QuestionsService{
    retriveAllQuestions(){
        return  axios.get(`http://localhost:8080/rest/questions/all`);
    }

    retriveQuestion(id){
        return  axios.get(`http://localhost:8080/rest/questions/${id}`);
    }
}
export default new QuestionsService();