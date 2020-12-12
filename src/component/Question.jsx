import { Component } from 'react';
import QuestionItem from './QuestionItem'
import QuestionsService from '../api/QuestionsService'
import SpecificQuestion from './SpecificQuestion';


class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions : [],
            qID :1
        }  
        this.idIncrement = this.idIncrement.bind(this);
        this.findQuestion = this.findQuestion.bind(this);
        this.createNumbers = this.createNumbers.bind(this);


    }
    componentDidMount(){
        if(this.state.qID === 1){
            console.log("all questions");
        QuestionsService.retriveAllQuestions()
        .then(
            (response) => {
                this.setState({
                questions : response.data
            })
        })
    } else {
        console.log("serach question");
        QuestionsService.retriveQuestion(this.state.qID)
        .then(
            (response) => {
                this.setState({
                questions : response.data,
                
            })
        })
    }
    }
    idIncrement(){
        this.setState(
            (prevState) => {
            return {
            qID : prevState.qID +1
            }
        })
    }

    findQuestion(by){
        this.setState({
            qID : by

        })
    }

    createNumbers(n){
        let questionNumber = [];
        for(let i =1; i < n+1; i++){
            questionNumber.push(<SpecificQuestion by={i} findQuestionMethod={this.findQuestion}/>);
        }
        return questionNumber;
    }
    
    render(){
       const question =  this.state.questions.map(data => 
                            {
                                if(data.id === this.state.qID){
                                    return <QuestionItem key={data.id} query={data} idIncrement={this.idIncrement} />
                                }else{
                                    return null;
                                }
                            })
        return(
            <div className="container mt-5 mb-2 p-3" >
                <div>
                    {question}
                </div> 
               <div className=" float-left h-25 ">
                    <h2 className=" p-1 bg-info">Questions</h2>
                    <div className="container border border-primary" style={{width:"200px" ,height:"300px"}}>{this.createNumbers(5)}</div> 
               </div>
            </div>
        );
    }
}
export default Question;