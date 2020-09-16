import React from 'react';
import { connect } from 'react-redux';
import { fetchNodes, fetchCollaborationNode } from '../actions';

import NodeList from './Lists/NodeList'

class NodeLists extends React.Component {

    componentDidMount(){
        // set interval to update the nodes status (offline/online)
        this.intervalId = setInterval(() => this.loadData(), 5000);
        // fetch latest data
        this.loadData();
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    loadData(){
        this.props.fetchNodes()
        // this.props.fetchCollaborationNode(1)
    }

    render(){
        return (
            <div>
                <h2 className="ui left aligned header">Your nodes</h2>
                <div className="ui segment">
                    <NodeList
                        nodes={ this.props.nodes }
                    />
                </div>
                {/* <h1>Collaboration 1 nodes</h1>
                <div className="ui raised fluid card">
                    <NodeList nodes={ this.props.collaborationNode } />
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { nodes: state.nodes, collaborationNode: state.collaborationNodes };
}

export default connect(mapStateToProps, { fetchNodes, fetchCollaborationNode })(NodeLists);
