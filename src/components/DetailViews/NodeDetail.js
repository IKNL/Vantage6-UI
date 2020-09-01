import React from 'react';
import { connect } from 'react-redux';
import OrgHeader from '../OrgHeader';

const NodeDetail = ({selectedNode, nodes}) => {

    if (!selectedNode){
        return <div>Select a node</div>
    }

    var showNode = nodes.filter(x => x.id === selectedNode);
    return (
        <div className="ui segment fluid">
            
            <div className="content">
                    <div className="summary">
                    {showNode[0].status}
                    </div>
            </div>
            <br></br>
            <div className="content">
                <div className="ui header">{showNode[0].name}</div>
            </div>
        </div>
        );
};

const mapStateToProps = (state) => {
    return { selectedNode: state.selectedNode, nodes: state.nodes }
};

export default connect(mapStateToProps)(NodeDetail);
