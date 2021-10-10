import React, { Component } from 'react';
import '../css/QuestionItem.css'
import { withRouter } from 'react-router';

class Welcome extends Component{
    constructor(){
        super();
        this.onClickHandle = this.onClickHandle.bind(this);
        this.tech = this.tech.bind(this);
    }
    onClickHandle(){
        this.props.history.push("/questions");
    }
    tech(){
        this.props.history.push("/technology");
    }
    render(){
        return(
            <div className="centerText">
                <h1 className="textColor animate__animated animate__zoomInDown">Welcome to Java Quiz </h1>
                {/* <p className="animate__animated animate__zoomInDown">To pass this exam, you must have to get 66% correct answers. </p> */}
                <button className="btn draw-border animate__animated animate__fadeInUp" onClick={this.onClickHandle}>Start</button>
                <button className="btn btn-danger animate__animated animate__fadeInUp ml-3" onClick={this.tech}>Tech</button>
            </div>
        )
    }
}
export default withRouter(Welcome);