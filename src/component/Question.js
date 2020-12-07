import { Component } from 'react';
import data from '../data/data';
import QuestionItem from './QuestionItem.jsx'

class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions : data
        }
        
    }
   
    render(){
        const question =  this.state.questions.map(data => <QuestionItem query={data}/>)
        return(
            <div>
               {question}
            </div>
        );
    }
}
export default Question;