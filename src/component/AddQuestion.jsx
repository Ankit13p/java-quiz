import React , { Component } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import QuestionsService from '../api/QuestionsService.js';

class AddQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.id,
            description : "",
            a : "",
            b :"",
            c: "",
            d: "",
            correct : "",
            hint : ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
        console.log(this.state.id);
    }
    validate(values){
        let errors = {}
        
        if(!values.description){
            errors.description = "Please enter description";
        }

        if(!values.a){
            errors.a = "Please enter answer for option a";
        }
        if(!values.b){
            errors.b = "Please enter answer for option b";
        }
        if(!values.c){
            errors.c = "Please enter answer for option c";
        }
        if(!values.d){
            errors.d = "Please enter answer for option d";
        }
        if(!values.correct){
            errors.correct = "Please enter option  for correct answer";
        }
        if(!values.hint){
            errors.hint = "Please enter a hint";
        }
        return errors;
    }
    onSubmit(values){
        let question =  {
            id : this.state.id,
            description : values.description,
            a : values.a,
            b : values.b,
            c: values.c,
            d: values.d,
            correct : values.correct,
            hint : values.hint
        };
        if(this.state.id === -1){
            QuestionsService.createQuestion(question).then(
                () => this.props.history.push(`/questions`)
            )
        }
        else{
            QuestionsService.updateQuestion (this.state.id, question).then(
                () => this.props.history.push(`/thankyou`)
            
            )
        }
    }
    componentDidMount(){
        if(this.state.id === undefined){
            return
        }
        if(!(this.state.id === undefined)){
        QuestionsService.retriveQuestion(this.state.id)
        .then(res => this.setState({
            description : res.data.description,
            a : res.data.a,
            b : res.data.b,
            c: res.data.c,
            d: res.data.c,
            correct : res.data.correct,
            hint : res.data.hint
            }))
        }
    }
    render(){
        let {description, a, b, c, d, correct, hint} = this.state
        return (
            <div>
                {((this.state.id === undefined))&&<h2 className="mt-5 pt-3 text-info text-center animate__animated animate__fadeInLeft"><b><i> New Question</i></b></h2>}
                {(!(this.state.id === undefined))&&<h2 className="mt-5 pt-3 text-info text-center animate__animated animate__fadeInLeft"><b><i> update Question {this.state.id}</i></b></h2>}
                <div className="container animate__animated animate__fadeInRight" style={{textAlign: "left"}}>
                    <Formik 
                        initialValues={
                            {
                                description,
                                a,
                                b,
                                c,
                                d,
                                correct,
                                hint
                            }
                        }
                        onSubmit = {this.onSubmit}
                        validate = {this.validate}
                        validateOnBlur = {false}
                        validateOnChange = {false}
                        enableReinitialize = {true}>
                        {
                            (props) =>(
                                <Form>
                                    <fieldset className="form-group">
                                        <label><b><i> Description </i></b></label>
                                        <Field className="form-control" type="text" name="description"/>
                                        <ErrorMessage name="description" component="div" className="alert-warning"></ErrorMessage>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label><b><i> Option : a </i></b></label>
                                        <Field className="form-control" type="text" name="a"/>
                                        <ErrorMessage name="a" component="div" className="alert-warning"></ErrorMessage>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label><b><i> Option : b </i></b></label>
                                        <Field className="form-control" type="text" name="b"/>
                                        <ErrorMessage name="b" component="div" className="alert-warning"></ErrorMessage>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label><b><i> Option : c </i></b></label>
                                        <Field className="form-control" type="text" name="c"/>
                                        <ErrorMessage name="c" component="div" className="alert-warning"></ErrorMessage>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label><b><i> Option : d </i></b></label>
                                        <Field className="form-control" type="text" name="d"/>
                                        <ErrorMessage name="d" component="div" className="alert-warning"></ErrorMessage>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label><b><i> Correct Option </i></b></label>
                                        <Field className="form-control" type="text" name="correct"/>
                                        <ErrorMessage name="correct" component="div" className="alert-warning"></ErrorMessage>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label><b><i> Hint </i></b></label>
                                        <Field className="form-control" type="text" name="hint"/>
                                        <ErrorMessage name="hint" component="div" className="alert-warning"></ErrorMessage>
                                    </fieldset>
                                    <button type="submit" className="btn draw-border">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}
export default AddQuestion;