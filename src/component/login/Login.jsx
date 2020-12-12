import React , { Component } from 'react';
class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value,
        });
    }
    render(){
        return(
            <div>
                <div className="container mt-5 p-3">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <label style={{float:"left"}}>User Name</label>
                                    <i className="prefix grey-text"></i>
                                    <input className="form-control validate" type="text" name="username" value={this.state.username} onChange = {this.handleChange} />
                                </div>
                                <div className="md-form mb-4">
                                <label style={{float:"left"}}>Password</label>
                                    <i className="prefix grey-text"></i>
                                    <input className="form-control validate" type="password" name="password" value={this.state.password} onChange = {this.handleChange} />
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button className="btn btn-success" onClick = {this.loginClicked}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Login;