import { Component } from 'react';
import QuestionItem from './QuestionItem'
import QuestionsService from '../api/QuestionsService'
import SpecificQuestion from './SpecificQuestion';

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions : [],
            qID :1,
            correctCount : 0,
            trueId: []
        }  
        this.idIncrement = this.idIncrement.bind(this);
        this.findQuestion = this.findQuestion.bind(this);
        this.createNumbers = this.createNumbers.bind(this);
        this.trueAns = this.trueAns.bind(this);
        this.thankyou = this.thankyou.bind(this);
    }
    componentDidMount(){
        if(this.state.qID === 1){
            QuestionsService.retriveAllQuestions()
            .then(
                (response) => {
                    this.setState({
                    questions : response.data
                })
            })
        } else {
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
    trueAns(resultId){
        this.setState(
            (prevState) => {
                const trueId = [...prevState.trueId ,resultId];
            return {
                correctCount : prevState.correctCount +1,
                trueId 
            }
        })
    }
    createNumbers(n){
        let trueQue = this.state.trueId;
        let questionNumber = [];
        for(let i =1; i < n+1; i++){
            {(trueQue.includes(i)) && questionNumber.push(<SpecificQuestion by={i} findQuestionMethod={this.findQuestion} isTrue={true}/>);}
            {!(trueQue.includes(i)) && questionNumber.push(<SpecificQuestion by={i} findQuestionMethod={this.findQuestion} isTrue={false}/>);}
        }
        return questionNumber;
    }
    thankyou(){
            this.props.history.push(`/thankyou`)
    }
    render(){
        console.log(this.state.trueId);
        let count =0;
        let display = false;
       const question =  this.state.questions.map(data => 
                            {   count++
                                display = true
                                if(data.id === this.state.qID){
                                    return <QuestionItem key={data.id} query={data} idIncrement={this.idIncrement} trueAns={this.trueAns}/>
                                }else{
                                    return null;
                                }
                            })
        return(
            <div className="" >
                { (this.state.qID < count+1) && 
                <>
                    <div className=".d-inline-block mt-5 mb-2 p-3" style={{width:"70%"}} >
                        {question}

                    </div> 
                    <div className=" float-left .d-inline-block mt-4 p-2" style={{width:"20%"}}>
                    <h4 className="container p-2 bg-light text-dark border border-primary" style={{fontSize:"1em"}}>Result : <span className="text-success">{this.state.correctCount}</span> / <span className="text-danger">{count}</span></h4>
                        <h4 className="container p-2 bg-info" style={{fontSize:"1em"}}>Questions</h4>
                        
                        <div className="border border-primary .d-inline-block p-2" >{this.createNumbers(count)}</div> 
                    </div> 
                </>}
                { !(this.state.qID < count+1) && 
                <>
                    <div className="centerText">
                        {/* {this.state.correctCount>(count/3) && <h1 className="text-success">Congratulations you are passed!!! </h1>}
                        {!this.state.correctCount<(count/3) && <h1 className="text-danger">Ooops Sorry you are failed !!! </h1>} */}
                        <h4 className="container text-info">You got <span className="text-success">{this.state.correctCount}
                        </span> corrects out of <span className="text-danger">{count}</span></h4>
                    
                        <button className="btn draw-border" onClick={this.thankyou}>End</button>
                    </div>
                </>}
            </div>
        );
    }
}
export default Question;