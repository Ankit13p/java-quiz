import axios from 'axios'

class QuestionsService{
    retriveAllQuestions(){
      //  return  axios.get(`http://3.130.171.62:9090/rest/questions/all`);
        return  axios.get(`http://localhost:8080/rest/questions/all`);
    }

    retriveQuestion(id){
        return  axios.get(`http://localhost:8080/rest/questions/${id}`);
    }
    createQuestion(question){
        return  axios.post(`http://localhost:8080/rest/questions/load`, question);
    }
    updateQuestion(id, question){
        return  axios.put(`http://localhost:8080/rest/questions/load/${id}`, question);
    }
}
export default new QuestionsService();
