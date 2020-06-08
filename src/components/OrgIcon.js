import React from 'react';
import { connect } from 'react-redux';

import { selectNode, selectPage, fetchOrgs } from '../actions';
class OrgIcon extends React.Component {

    state = { hover: false }

    getOrgName(id){
        if(this.props.organizations.length <= 0){
            this.props.fetchOrgs();
        }
        var org = this.props.organizations.filter(x => x.id === id);
        if(org.length > 0){
            return org[0].name;
        }
    }

    render(){
        return(
            <button
            className="ui button"
            // onClick={() => {
            //     this.props.selectPage(5);
            //     }
            //}
            >
                <div><i className="ui building icon middle aligned"></i>{this.getOrgName(this.props.orgID)}</div>
                
            </button>
        )
    }
    
}

const mapStateToProps = (state) => {
    return { organizations: state.organizations }
};

export default connect(mapStateToProps, { selectNode, selectPage, fetchOrgs })(OrgIcon);