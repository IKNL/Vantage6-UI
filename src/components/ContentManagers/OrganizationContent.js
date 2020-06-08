import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

import Statistic from '../Statistic';
import { selectOrg, fetchAllContent } from '../../actions';


class OrganizationContent extends React.Component {
    
    componentDidMount(){
        
        this.props.fetchAllContent();

        if(!this.props.selectedOrg){
            this.props.selectOrg(1);
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

    render(){

        if(!this.props.selectedOrg){
            return (<div>No organization selected</div>);
        }else{
            var org = this.props.orgs.filter(x => x.id === this.props.selectedOrg);
            if(org){
                org = org[0];

                return(
                    <div className="ui segment fluid">
                        <h2 className="ui header">
                            <i className="building icon"></i>
                            <div className="content">
                                {org.name}
                                <div className="sub header">{org.domain}</div>
                            </div>
                        </h2>
                    
                        <h4 className="ui header"> <b>Address:</b></h4>
                        <p className="ui sub header">
                            {org.address1}, &nbsp; 
                            {org.address2}, &nbsp;
                            {org.country}</p>
                        <div className="ui three column grid" style={{pointerEvents:"none"}}>
                            <div className="ui column">
                                <Statistic uiClasses="users icon" blockName="USERS" blockCount={org.users.length} />
                            </div>
                            <div className="ui column">
                                <Statistic uiClasses="chart bar icon"  blockName="CREATED TASKS" blockCount={org.created_tasks.length} />
                            </div>
                            <div className="ui column">
                                <Statistic uiClasses="handshake icon" blockName="COLLABORATIONS" blockCount={org.collaborations.length} />
                            </div>
                        </div>

                        </div>
                )
            }else{
                return null;
            }
        }
    };
}

const mapStateToProps = (state) => {
    return { orgs: state.organizations, selectedOrg: state.selectedOrg }
};

export default connect(mapStateToProps, { selectOrg, fetchAllContent })(OrganizationContent);