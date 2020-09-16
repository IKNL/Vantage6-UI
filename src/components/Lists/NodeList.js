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
        var style = "";
        console.log(`selected node = ${this.props.selectedNode}, node = ${node.id}`)
        if (this.props.selectedNode !== undefined){
            if (this.props.selectedNode === node.id){
                style = "active"
            }
        }

        return (
        <div className={`item ${style}`} key={node.id} onClick={() => this.props.selectNode(node.id)}>
            {this.nodeIcon(node.status)}
            <div className="content">
                <div className="ui sub header v6-blue">
                    {node.name}
                </div>
                <div className="ui sub header">
                    {node.status}
                </div>
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
            <div className="ui relaxed divided list selection">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // return { nodes: state.nodes, selectedNode: state.selectedNode };
    return { selectedNode: state.selectedNode };
}

export default connect(mapStateToProps, { fetchAllContent, selectNode, fetchNodes })(NodeList);
