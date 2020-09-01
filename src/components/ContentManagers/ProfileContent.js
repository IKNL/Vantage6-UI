import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { fetchProfile, editUser } from '../../actions';


class ProfileContent extends React.Component {
    
    componentDidMount(){
        var url = this.props.token[0].user_url;
        url = url.slice(4);
        if(this.props.user){
            if(this.props.activeUser === this.props.user.id){
                return;
            }
        }

        if(this.props.activeUser){
            this.props.fetchProfile('user/' + this.props.activeUser);
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

    renderInput = ({ input, label, value, placeholder, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{ label }</label>
                <input value={value} placeholder={ placeholder } {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        const editUser = this.props.editingUser;
        this.props.editUser(editUser, formValues);
    }

    render(){

        if(!this.props.user){
            return (<div>No user selected</div>);
        }else if(this.props.isEditing){
            return(
                <div className="ui segment fluid">
                   
                   <div className="content">
                           <h3 className="ui header">
                               Editing user {this.props.user.username}
                           </h3>
                   </div>
                   <br></br>

                   <div className="ui form">
                     <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">

                            <div className="field">
                                <Field name="firstname" placeholder={this.props.user.firstname} 
                                component={this.renderInput} value={this.props.user.firstname}  label="First name" readOnly />
                            </div>
                            <div className="field">
                                <Field name="lastname" placeholder={this.props.user.lastname} 
                                component={this.renderInput} label="Last name" readOnly />
                            </div>
                            <div className="field">
                                <Field name="username" placeholder={this.props.user.username} 
                                component={this.renderInput} label="Username" readOnly />
                            </div>

                            <div className="ui three fields">
                                <div className="field">
                                    <Field name="role" placeholder={this.props.user.role} 
                                    component={this.renderInput} label="Role" readOnly />
                                </div>
                                <div className="field">
                                    <Field name="type" placeholder={this.props.user.type} 
                                    component={this.renderInput} label="Type" readOnly />
                                </div>
                                <div className="field">
                                    <Field name="status" placeholder={this.props.user.status} 
                                    component={this.renderInput} label="Status" readOnly />
                                </div>
                            </div>
                            <button className="ui button green"
                        onClick={() => this.props.editUser(null)}>Save changes</button>
                        <button className="ui button red" onClick={() => this.props.editUser(null)}>Discard changes</button>
                   </form> 
                        
                    </div>
       
                   


               </div>   
           )
        }else{
            return(
                <div className="ui segment fluid">
                   
                   <div className="content">
                    	<h2 className="ui header">
                            <i className="user icon"></i>
                            <div className="content">
                                {this.props.user.firstname}&nbsp;{this.props.user.lastname}
                                <div className="sub header">{this.props.user.username}</div>
                            </div>
                        </h2>
                   </div>
                   <br></br>
                   <div className="ui form">
                            <div className="field">
                            <label>First Name</label>
                            <input placeholder={this.props.user.firstname} readOnly type="text" />
                            </div>
                            <div className="field">
                            <label>Last Name</label>
                            <input placeholder={this.props.user.lastname} readOnly type="text" />
                            </div>
                            <div className="field">
                            <label>Username</label>
                            <input placeholder={this.props.user.username} readOnly type="text" />
                            </div>

                            <div className="ui three fields">
                                <div className="field">
                                <label>Role</label>
                                <input placeholder={this.props.user.role} readOnly type="text" />
                                </div>
                                <div className="field">
                                <label>Type</label>
                                <input placeholder={this.props.user.type} readOnly type="text" />
                                </div>
                                <div className="field">
                                <label>Status</label>
                                <input placeholder={this.props.user.status} readOnly type="text" />
                                </div>
                            </div>
                        
                    </div>
       
                   <div className="ui divider"></div>
                   <button className="ui button primary"
                   onClick={() => this.props.editUser(this.props.activeUser)}>Edit profile</button>
                   <button className="ui button red"
                   onClick={() => this.props.editUser(this.props.activeUser)}>Delete profile</button>
               </div>   
           )
        }
        };
}

const mapStateToProps = (state) => {
    return { isEditing: state.isEditing, activeUser: state.selectedUser, token: state.token, user: state.user }
};

const validate = (formValues) => {
    const errors = {};

    if(!formValues.username){
        errors.username = "Enter a username";
    }

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
})(ProfileContent);

export default connect(mapStateToProps, { fetchProfile, editUser })(formWrapped);