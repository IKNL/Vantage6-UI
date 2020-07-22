import React from 'react';
import { connect } from 'react-redux';

import { selectNode, selectPage, fetchOrgs } from '../actions';
class OrgIcon extends React.Component {

    state = { hover: false, thisOrg: null }

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

    componentDidMount(){

    }

    getClassNames(){
        return this.state.thisOrg ? "ui icon button green" : "ui icon button red";
    }

    render(){
        return(
            <div className={this.getClassNames()} data-tooltip={this.getOrgContact(this.props.orgID)}>
                <i class="building icon"></i>
                {this.getOrgName(this.props.orgID)}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return { organizations: state.organizations }
};

export default connect(mapStateToProps, { selectNode, selectPage, fetchOrgs })(OrgIcon);