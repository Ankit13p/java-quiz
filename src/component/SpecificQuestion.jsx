import React, {Component} from 'react';
import propTypes from 'prop-types';

class SpecificQuestion extends Component{
    render(){
            return (
                <>
                    <button className= {"m-1 p-1 btn btn-outline-dark btn-size "  +(this.props.isTrue ? "bg-success" : "bg-danger" )}  onClick={() => this.props.findQuestionMethod(this.props.by)}>{this.props.by}</button>
                </>
            );
    }         
}
SpecificQuestion.propTypes = {
    by : propTypes.number
}
export default SpecificQuestion;