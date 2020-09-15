import React from 'react';
import { connect } from 'react-redux';

// import { } from '../actions';
class NodeIcon extends React.Component {

    state = { hover: false, thisNode: null }



    getClassNames(){
        return this.state.thisNode ? "ui icon button green" : "ui icon button red";
    }

    getNodeContact(){
        return 'Contact: ' + this.props.nodeID;
    }

    render(){
        console.log(this.props.nodes)
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
    return {
        organizations: state.organizations,
        nodes: state.nodes
    }
};


export default connect(
    mapStateToProps,
    {  }
)(NodeIcon);