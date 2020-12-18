import React, {Component} from 'react';
import propTypes from 'prop-types';

class SpecificQuestion extends Component{
    render(){
            return (
                <>
                    <button className= {"m-1 p-2 btns btn-outline-dark btn-size "  +(this.props.isTrue ? "bg-success" : "bg-danger" )}  onClick={() => this.props.findQuestionMethod(this.props.by)}><label className="text-light">{this.props.by}</label></button>
                </>
            );
    }         
}
SpecificQuestion.propTypes = {
    by : propTypes.number
}
export default SpecificQuestion;