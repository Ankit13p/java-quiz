import React, {Component} from 'react';
import propTypes from 'prop-types';

class SpecificQuestion extends Component{
    render(){
            return (
                <div>
                    <button className="m-1 p-1 btn btn-dark rounded-circle " onClick={() => this.props.findQuestionMethod(this.props.by)}>{this.props.by}</button>
                </div>
            );
    }
}
SpecificQuestion.propTypes = {
    by : propTypes.number
}
export default SpecificQuestion;