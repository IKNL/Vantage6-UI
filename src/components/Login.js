import React from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import trolltunga from '../images/trolltunga.jpg';
import cuppolone from '../images/cuppolone.jpg';
import taipei101 from '../images/taipei101.jpg';
import logo from '../images/artboard1.png';
import { login, register, reset, returningVisit } from '../actions/upstreamActions';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {img: trolltunga, registration: false, forgotPassword: false}
        const cookies = new Cookies();
        const tok = cookies.get('token', { path: '/'});
        if(tok){
            //this.props.returningVisit(tok);
        }
    }


    componentDidMount(){
        this.getRandomImage();
    }

    toggleRegistration(reg){
        this.setState({registration: reg})
    }

    togglePassForgot(forgot){
        this.setState({forgotPassword: forgot})
    }

    getRandomImage(){
        const random = Math.random();
        if(random <= 0.33){
            this.setState({img:trolltunga});
        }else if(random <= 0.66){
            this.setState({img:cuppolone});
        }else{
            this.setState({img:taipei101});
        }
    }

    renderError({ error, touched }){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="subheader">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, placeholder, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{ label }</label>
                <input placeholder={ placeholder } {...input} type={type} />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmitLogin = (formValues) => {
        this.props.login(formValues);
    }

    onSubmitRegister = (formValues) => {
        this.props.register(formValues);
    }

    onSubmitForgotPass = (formValues) => {
        this.props.reset(formValues);
    }

    render(){
        if(this.state.registration){
            return (
                <div className="nine wide column login-panel">
                    <img className="login-background-image" src={this.state.img} alt="background"/>
                    <div className="login-overlay"></div>
                    <div className="ui segment">
                            <h4 className="ui header">Register a new account</h4>
                            <form onSubmit={this.props.handleSubmit(this.onSubmitRegister)} className="ui form error">
                                <Field name="firstname" component={this.renderInput} label="First name" />
                                <Field name="lastname" component={this.renderInput} label="Last" />
                                <Field name="username" component={this.renderInput} label="Username" />
                                <Field name="password" component={this.renderInput} label="Password" type="password" />
                                <Field name="password-repeat" component={this.renderInput} label="Repeat password" type="password" />
                                <button className="ui fluid large submit button">Register</button>
                            </form>

                            <div className="divider"></div>
                            <br />
                            <div className="ui fluid buttons">
                                <button className="ui secondary basic button" onClick={() => this.toggleRegistration(false)}>Return to login</button>

                            </div>

                    </div>
                </div>
            );
        }else if(this.state.forgotPassword){
            return (
                <div className="nine wide column login-panel">
                    <img className="login-background-image" src={this.state.img} alt="background"/>
                    <div className="login-overlay"></div>

                    <div className="ui segment">
                        <img className="ui center aligned grid" width="105%" src={logo} alt="logo" />
                            <p>Request a new password by entering your username below</p>
                            <form onSubmit={this.props.handleSubmit(this.onSubmitForgotPass)} className="ui form error">
                                <Field name="username" component={this.renderInput} label="Username" />
                                <button className="ui fluid large submit button">Send email</button>
                            </form>

                            <div className="divider"></div>
                            <br />
                            <div className="ui fluid buttons">
                                <button className="ui secondary basic button" onClick={() => this.togglePassForgot(false)}>Return to login</button>

                            </div>

                    </div>
                </div>
            );
        }else{
            return (
                <div className="ui middle aligned grid login-page ">
                    <img className="login-background-image" src={this.state.img} alt="background" />
                    <div className="login-overlay"></div>

                    <div className="row centered">
                        <div className="column six wide">
                            <div className="ui container segment">


                            <img className="ui centered image" src={logo} alt="vantage6 logo" />
                            <form onSubmit={this.props.handleSubmit(this.onSubmitLogin)} className="ui form error">
                                <Field name="username" component={this.renderInput} label="Username" />
                                <Field name="password" component={this.renderInput} label="Password" type="password" />
                                <div className="ui">{ this.props.failedLogin + " " }</div>
                                <button className="ui fluid large submit button">Log In</button>
                            </form>

                            <div className="divider"></div>
                            <br />
                            {/* <div className="ui fluid buttons">
                                <button className="ui secondary basic button" onClick={() => this.toggleRegistration(true)} >Register new account</button>
                                <div className="or"></div>
                                <button className="ui secondary basic button" onClick={() => this.togglePassForgot(true)}>
                                    Forgot password
                                </button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        }
    }


const mapStateToProps = (state) => {
    return { token: state.token, failedLogin: state.failedLogin };
}


const validate = (formValues) => {
    const errors = {};

    if(!formValues.username){
        errors.username = "Enter a username";
    }
    if(!formValues.password){
        errors.password = "Enter your password";
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'login',
    validate: validate
})(Login);


export default connect(mapStateToProps, { login, register, reset })(formWrapped);
