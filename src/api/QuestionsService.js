import axios from 'axios'

class QuestionsService{
    retriveAllQuestions(){
        return  axios.get(`http://3.130.171.62:9090/rest/questions/all`);
    }

    retriveQuestion(id){
        return  axios.get(`http://3.130.171.62:9090/rest/questions/${id}`);
    }
    createQuestion(question){
        return  axios.post(`http://3.130.171.62:9090/rest/questions/load`, question);
    }
    updateQuestion(id, question){
        return  axios.put(`http://3.130.171.62:9090/rest/questions/load/${id}`, question);
    }
}
export default new QuestionsService();