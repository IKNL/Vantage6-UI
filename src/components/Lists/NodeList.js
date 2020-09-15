import React from 'react';
import { connect } from 'react-redux';
import { selectNode, fetchAllContent, fetchNodes } from '../../actions';

class NodeList extends React.Component {

    nodeIcon(status){
        switch(status){
            case('offline'):
                return (<i className="wifi icon red middle aligned"></i>);
            case('online'):
                return (<i className="wifi icon green middle aligned"></i>);
            default:
                return (<i className="wifi icon middle aligned"></i>);
        }

    }

    nodeItem(node){

        let key = null;
        if (node.api_key !== undefined){
            console.log(`key=${node.api_key}`)
            key = (
                <div className="ui sub header user-role">
                    Key: <b>{node.api_key}</b>
                </div>
            )
        }

        return (
        <div className="item" key={node.id}
        onClick={() => this.props.selectNode(node.id)}
        >
            {this.nodeIcon(node.status)}
            <div className="content">
                <div className="ui sub header user-name">
                    {node.name}
                </div>
                {key}
            </div>
        </div>
        )

    }

    renderList(){

        return this.props.nodes.map((node, props) => {

            if(node.id !== null){
                return this.nodeItem(node)
            }

        });
    }

    render(){
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // return { nodes: state.nodes, selectedNode: state.selectedNode };
    return { selectedNode: state.selectNode };
}

export default connect(mapStateToProps, { fetchAllContent, selectNode, fetchNodes })(NodeList);
