import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css'

import { createCollaboration } from '../../actions/upstreamActions';


class CreateCollabForm extends React.Component {

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

    }

    GetOrganizationOptions(){
        return this.props.organizations.map((org, props) => {
            console.log(this.props.user);
            if(org.id !== this.props.user){
                return (
                    org.name
                );
            }
            
        });
    }

    render(){
        return (
            <div className="ui segment fluid">
                <h2 className="ui header">Create a new collaboration</h2>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <div>
                        <label>Collaboration name:</label>
                        <Field name="title" component={this.renderInput} />
                    </div>
                    <div>
                        <label>Short description:</label>
                        <textarea name="description" component={this.renderInput} type="textarea" />
                    </div>
                    <div>
                        <label>Invite organizations</label>
                        <Field
                        name="organizations"
                        label="Invite organizations"
                        component={Multiselect}
                        defaultValue={[]}
                        onBlur={() => this.props.onBlur()}
                        data={this.GetOrganizationOptions()}/>
                    </div>
                    <div>
                        <label>Choose algorithms for collaboration</label>
                        <Field
                        name="algorithms"
                        label="Select algorithms"
                        component={Multiselect}
                        defaultValue={[]}
                        onBlur={() => this.props.onBlur()}
                        data={['CoxPH','LOGR']}/>
                    </div>
                    <br />
                    <button className="ui button primary">Submit</button>
                </form> 
            </div>

        );
    }
    
};

const mapStateToProps = (state) => {
    return { organizations: state.organizations, user: state.user }
};

const validate = (formValues) => {
    const errors = {};

    return errors;
}


const formWrapped = reduxForm({
    form: 'editUser',
    validate: validate
})(CreateCollabForm);

export default connect(mapStateToProps, { createCollaboration })(formWrapped);
