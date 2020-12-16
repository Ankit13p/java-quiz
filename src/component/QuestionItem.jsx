import { Component } from 'react';

class QuestionItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption : null,
            correct : false,
            incorrect: false,
            submit : false,
            choice : false,
            next : false,
            inputsDisabled: false
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);


    }
    onValueChange(event) {
        this.setState((prev) =>{
            return {
            selectedOption: event.target.value,
            correct : false,
            incorrect : false,
            choice : true,
            submit : true,
            next : false
            }
        });
    }
    formSubmit(event) {
        event.preventDefault();
        if(this.state.selectedOption === this.props.query.correct){
            this.setState(
                (prev) => {
                    return {
                        correct : true,
                        incorrect : false,
                        submit: false, 
                        choice : false,
                        next : true,
                        inputsDisabled: true
                    }
                }
            ); 
            this.props.trueAns(this.props.query.id);
            
        }else{
            return this.setState( (prev) =>{
                return {
                incorrect : true,
                correct:false,
                submit: false,
                choice : false,
                next : true,
                inputsDisabled: true


                }
            })
        }
    }
    nextQuestion(){
            this.props.idIncrement();
    }
  
    
    render(){
        const items = []
        for (const [index, value] of this.props.query.description.entries()) {
            items.push(<p key={index}>{value}</p>)
          }
        return(
            <div className="container float-left mb-5" key= {this.props.query.id}>
                <h4 className="bg-warning text-center p-2 ">Question {this.props.query.id}.</h4>
                <div className="border border-primary p-1">
                    <code className="font-weight-bold"> {items}</code>
                    <h5>Options:</h5>
                    <form onSubmit={this.formSubmit}>
                        <ul itemType="a">
                            <li><input type="radio" value="a" checked={this.state.selectedOption === "a"}
                                onChange={this.onValueChange} disabled={ this.state.inputsDisabled}/> <span  className="pl-2">{this.props.query.a}</span></li>
                            <li><input type="radio" value="b" checked={this.state.selectedOption === "b"}
                                onChange={this.onValueChange} disabled={ this.state.inputsDisabled}/><span  className="pl-2">{this.props.query.b}</span></li>
                            <li><input type="radio" value="c" checked={this.state.selectedOption === "c"}
                                onChange={this.onValueChange} disabled={ this.state.inputsDisabled}/><span  className="pl-2">{this.props.query.c}</span></li>
                            <li><input type="radio" value="d" checked={this.state.selectedOption === "d"}
                                onChange={this.onValueChange} disabled={ this.state.inputsDisabled}/><span  className="pl-2">{this.props.query.d}</span></li>
                            
                        </ul>
                        {this.state.choice && <p className="text-primary">You selected : {this.state.selectedOption}</p>}
                        {this.state.submit && <button className="btn btn-danger" type="submit"> Submit </button>}
                        {this.state.next && <button className="btn btn-info" onClick={this.nextQuestion}> next </button>}
                        
                    </form>
                    <div className="pt-2">
                        {this.state.correct && <h5 className="text-center text-light bg-success pt-2 pb-2"> Correct</h5>}
                        {this.state.incorrect && <div>
                                                        <h5 className="text-center text-light bg-danger pt-2 pb-2">oooops! Incorrect</h5>
                                                        <h6 className="text-success "> Correct Answer is : {this.props.query.correct}</h6>
                                                        <h6 className="text-info">{this.props.query.hint}</h6>
                                                    </div>}
                    </div>
                </div>                
            </div>
        );
    }
}    
export default QuestionItem;

