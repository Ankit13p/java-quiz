import React from 'react';

function Technology(){
    return(
        <div className="container mt-5 mb-2 p-3" >
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="container">
                        <div class="row pl-5">
                            <div class="col-md-4 m-1 p-5 border border-success rounded-right animate__animated animate__fadeInLeft bg-light">
                                <h3 className="text-danger">React</h3>
                                <li>functional and class components</li>
                                <li>React JSX</li>
                                <li>react life cycle</li>
                                <li>state and props</li>
                                <li>onChange, onClick event</li>
                                <li>map method</li>
                                <li>Router, Route, Link, Redirect</li>
                                <li>conditional rendering with &&</li>
                                <li>styling components</li>
                                <li>formik form api</li>
                                <li>axios: Promise based HTTP API</li>
                            
                            </div>
                            <div class="col-md-3 m-2 p-5 border border-success rounded animate__animated animate__fadeIn">
                                <h3 className="text-danger">Java</h3>
                                <li>Java programming</li>
                                <li>maven </li>
                                <li>Spring Boot</li>
                                <li>REST api</li>
                                <li>JPA</li>
                                <li>Hibernate</li>
                                <li>DataBase  : MySQL</li>
                            </div>
                            <div class="col-md-4 m-1 p-5 border border-success rounded-left animate__animated animate__fadeInRight bg-light">
                                <h3 className="text-danger">AWS - Services</h3>
                                <li>IAM</li>
                                <li>EC2</li>
                                <li>S3</li>
                                <li>RDS</li>
                                <li>AWS Amplify</li>
                                <li>AWS Elastic Beanstalk</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Technology;