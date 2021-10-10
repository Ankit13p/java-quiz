import { Component } from 'react';
import '../css/QuestionItem.css'
import { withRouter } from 'react-router';

class ThankYou extends Component{
    constructor(props){
        super(props);
        this.welcome = this.welcome.bind(this);
    }
    welcome(){
        this.props.history.push(`/welcome`)
    }
    render(){
        return(
            <div className="centerText">
                <h1 className="textColor animate__animated animate__hinge">Thank you </h1>
                <button className="btn draw-border animate__animated animate__fadeInUp" onClick={this.welcome}>Start Again</button>

            </div> 
        )
    }
}
export default withRouter(ThankYou);