import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class Navigation extends Component{
    render(){
        return (
            <header>
                <nav className="navbar navbar-expand navbar-dark bg-dark text-light fixed-top">
                    <ul className="navbar-nav">
                        <li><Link className="navbar-brand" to="/welcome"> Java Questions</Link></li>
                       <li><Link className="nav-link" to = "/questions" >Questions</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to = "/create" >Add Que</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default withRouter(Navigation);