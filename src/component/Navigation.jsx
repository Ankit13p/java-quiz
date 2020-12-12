import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class Navigation extends Component{
    render(){
        const isUserLogedIn = false;
        return (
            <header>
                <nav className="navbar navbar-expand navbar-dark bg-dark text-light fixed-top">
                    <ul className="navbar-nav">
                        <li><Link className="navbar-brand" to="/welcome"> Java Questions</Link></li>
                       <li><Link className="nav-link" to = "/questions" >Questions</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLogedIn &&<li><Link className="nav-link" to = "/login" >Login</Link></li>}
                        {isUserLogedIn && <li><Link className="nav-link" to = "/logout" >logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}
export default withRouter(Navigation);