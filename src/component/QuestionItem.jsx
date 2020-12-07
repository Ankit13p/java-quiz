import { Component } from 'react';

class QuestionItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption : null,
            correct : false,
            incorrect: false
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);

    }

    onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
        });
      }
    formSubmit(event) {
        event.preventDefault();
        if(this.state.selectedOption === this.props.query.correct){
            return this.setState({
                correct : true,
                incorrect : false
            })
        }else{
            return this.setState({
                incorrect : true,
                correct:false
            })
        }
      }
    render(){
        const items = []
        for (const [index, value] of this.props.query.description.entries()) {
            items.push(<p key={index}>{value}</p>)
          }
        return(
            <div key= {this.props.query.id}>
                <h2>Question {this.props.query.id}</h2>
                <p className="left"> {items}</p>
                <h3>Options:</h3>
                <form onSubmit={this.formSubmit}>
                <ul itemType="a">
                    <li><input type="radio" value={this.props.query.options.a} checked={this.state.selectedOption === "{this.props.query.options.a}"}
                        onChange={this.onValueChange} />{this.props.query.options.a}</li>
                    <li><input type="radio" value={this.props.query.options.b} checked={this.state.selectedOption === "{this.props.query.options.b}"}
                        onChange={this.onValueChange} />{this.props.query.options.b}</li>
                    <li><input type="radio" value={this.props.query.options.c} checked={this.state.selectedOption === "{this.props.query.options.c}"}
                        onChange={this.onValueChange} />{this.props.query.options.c}</li>
                    <li><input type="radio" value={this.props.query.options.d} checked={this.state.selectedOption === "{this.props.query.options.d}"}
                        onChange={this.onValueChange} />{this.props.query.options.d}</li>
                    
                </ul>
                <div>
                    Selected option is : {this.state.selectedOption}
                    </div>
                    <button className="btn btn-default" type="submit">
                    Submit
                    </button>
                </form>
                {this.state.correct && <h3>Correct !!!</h3>}
                {this.state.incorrect && <div>
                    <h3>InCorrect !!!</h3>
                    <h3>Correct Answer is : {this.props.query.correct}</h3>
                    </div>}
                <hr/>
            </div>
        );
    }
}    
export default QuestionItem;