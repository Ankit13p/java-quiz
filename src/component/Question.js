import { Component } from 'react';
import QuestionItem from './QuestionItem.jsx'
import QuestionsService from '../api/QuestionsService'

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions : [],
            qID :1
        }  
        this.idIncrement = this.idIncrement.bind(this);
    }
    componentDidMount(){
        QuestionsService.retriveAllQuestions()
        .then(
            (response) => {
                this.setState({
                questions : response.data
            })
        })
    }
    idIncrement(){
        this.setState(
            (prevState) => {
            return {
            qID : prevState.qID +1
            }
        })
    }
    
    render(){
        
       const question =  this.state.questions.map(data => 
                            {
                                if(data.id === this.state.qID){
                                    return <QuestionItem key={data.id} query={data} idIncrement={this.idIncrement}/>
                                }else{
                                    return null;
                                }
                            })
        return(
            <div>
               {question}
            </div>
        );
    }
}
export default Question;