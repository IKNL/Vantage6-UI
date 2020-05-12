import React from 'react';
import { connect } from 'react-redux';
import OrgHeader from '../OrgHeader';

const NodeDetail = ({selectedNode}) => {

    if (!selectedNode){
        return <div>Select a node</div>
    }

    return (
        <div className="ui segment fluid">
            
            <div className="content">
                    <div className="summary">
                    {selectedNode.status}
                    </div>
            </div>
            <br></br>
            <div className="content">
                <div className="ui header">{selectedNode.name}</div>
            </div>

            <div className="ui divider"></div>
            <button className="ui button green">Edit node</button>
            <button className="ui button red">Delete node</button>
        </div>
        );
};

const mapStateToProps = (state) => {
    return { selectedNode: state.selectedNode }
};

export default connect(mapStateToProps)(NodeDetail);
