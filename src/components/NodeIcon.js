import React from 'react';
import { connect } from 'react-redux';

import { selectNode, selectPage, fetchOrgs } from '../actions';
class NodeIcon extends React.Component {

    state = { hover: false, thisNode: null }

   

    getClassNames(){
        return this.state.thisNode ? "ui icon button green" : "ui icon button red";
        // NOTE: this color should be based on active state, but that is not accessible yet
        // return this.state.thisOrg.active ? "ui icon button green" : "ui icon button red";
    }

    getNodeContact(){
        return 'Contact: ' + this.props.nodeID;
    }

    render(){
        //TODO: Change tooltip to node contact 
        return(
            <div className={this.getClassNames()} data-tooltip={this.getNodeContact()}> 
                <i className="server icon"></i>
                {this.props.nodeID}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return { organizations: state.organizations }
};

export default connect(mapStateToProps, { selectNode, selectPage, fetchOrgs })(NodeIcon);