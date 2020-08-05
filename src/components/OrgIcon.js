import React from 'react';
import { connect } from 'react-redux';

import { selectNode, selectPage, fetchOrgs } from '../actions';
class OrgIcon extends React.Component {

    state = { hover: false, thisOrg: null }

    componentDidMount(){
        var org = this.props.organizations.filter(x => x.id === this.props.orgID);
        if(this.state.thisOrg == null){
            this.setState({thisOrg: org[0]})
        }
    }

    getOrgName(id){
        if(this.props.organizations.length <= 0){
            this.props.fetchOrgs();
        }
        var org = this.props.organizations.filter(x => x.id === id);
        if(org.length > 0){
            return org[0].name;
        }
    }

    getOrgContact(id){
        if(this.props.organizations.length <= 0){
            this.props.fetchOrgs();
        }
        var org = this.props.organizations.filter(x => x.id === id);
        if(org.length > 0){
            return "Contact " + org[0].name + " through " + org[0].domain;
        }
    }

    getClassNames(){
        return this.state.thisOrg ? "ui icon button green" : "ui icon button red";
        // NOTE: this color should be based on active state, but that is not accessible yet
        // return this.state.thisOrg.active ? "ui icon button green" : "ui icon button red";
    }

    render(){
        return(
            <div className={this.getClassNames()} data-tooltip={this.getOrgContact(this.props.orgID)}>
                <i className="building icon"></i>
                {this.getOrgName(this.props.orgID)}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return { organizations: state.organizations }
};

export default connect(mapStateToProps, { selectNode, selectPage, fetchOrgs })(OrgIcon);