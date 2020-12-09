import axios from 'axios'

class QuestionsService{
    retriveAllQuestions(){
        return  axios.get(`http://localhost:8080/rest/questions/all`);
    }
}
export default new QuestionsService();