import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import trolltunga from '../images/trolltunga.jpg';
import cuppolone from '../images/cuppolone.jpg';
import taipei101 from '../images/taipei101.png';
import logo from '../images/artboard1.png';
import { login } from '../actions/upstreamActions';

class Login extends React.Component{

    state = {img: trolltunga}

    onComponentDidMount(){
        console.log(this.getRandomImage);
        this.setState({img: this.getRandomImage});
    }

    getRandomImage(){
        const random = Math.random();
        
        if(random <= 0.33){
            return trolltunga;
        }else if(random <= 0.66){
            return cuppolone;
        }else{
            return taipei101;
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

    onSubmit = (formValues) => {
        this.props.login(formValues);
    }

    render(){

        return (
                <div className="nine wide column login-panel">
                    <img className="login-background-image" src={this.state.img} alt="background"/>
                    <div className="login-overlay"></div>
                   
                    <div className="ui segment">
                        <img className="ui center aligned grid" src={logo} height='270' alt="logo" />
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                                <Field name="username" component={this.renderInput} label="Username" />
                                <Field name="password" component={this.renderInput} label="Password" type="password" />
                                <button className="ui fluid large submit button">Log In</button>
                            </form> 
                    </div>
                </div>
            );
        }
    }


const mapStateToProps = (state) => {
    return { token: state.token };
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


export default connect(mapStateToProps, { login })(formWrapped);

