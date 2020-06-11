import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { editUser, selectUser } from '../../actions';
import { editUserRemote } from '../../actions/upstreamActions';


class UserDetailEdit extends React.Component {

    renderError({ error, touched }){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="subheader">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, placeholder, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{ label }</label>
                <input placeholder={ placeholder } {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.editUserRemote(this.props.user.id, formValues);
        this.props.selectUser(null);
        this.props.editUser(null);
    }

    render(){
        return (
            <div className="ui segment fluid">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="firstname" component={this.renderInput} label="First name" />
                    <Field name="lastname" component={this.renderInput} label="Last name" />
                    <button className="ui button primary">Submit</button>
                </form> 
            </div>

        );
    }
    
};

const mapStateToProps = (state) => {
    return { user: state.selectedUser, isEditing: state.isEditing }
};

const validate = (formValues) => {
    const errors = {};

    if(!formValues.firstname){
        errors.firstname = "Enter a first name";
    }
    if(!formValues.lastname){
        errors.lastname = "Enter a last name";
    }

    return errors;
}


const formWrapped = reduxForm({
    form: 'editUser',
    validate: validate
})(UserDetailEdit);

export default connect(mapStateToProps, { editUser, editUserRemote, selectUser })(formWrapped);
