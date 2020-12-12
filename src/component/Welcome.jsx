import React, {  } from 'react';
import { Component } from 'react';


class Welcome extends Component{
    constructor(){
        super();
        this.onClickHandle = this.onClickHandle.bind(this);
    }

    onClickHandle(){
        this.props.history.push(`/questions`);
    }
    render(){
        return(
            <div className="centerText">
                <h1 className="">Welcome to Java Quiz </h1>
                <button className="btn btn-success" onClick={this.onClickHandle}>Start</button>
            </div>
        )
    }
}

export default Welcome;