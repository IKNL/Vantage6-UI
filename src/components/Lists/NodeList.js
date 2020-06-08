import React from 'react';
import { connect } from 'react-redux';
import { selectNode, fetchAllContent } from '../../actions';

class NodeList extends React.Component {

    componentDidMount(){
        this.props.fetchAllContent();
    }

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

    renderList(){

        return this.props.nodes.map((node, props) => {
            if(node.id !== null){
                return (
                    <div className="item" key={node.id}
                    onClick={() => this.props.selectNode(node.id)}
                    >
                        {this.nodeIcon(node.status)}
                        <div className="content">
                            <div className="ui sub header user-name">
                                {node.name} 
                            </div>
                            <div className="ui sub header user-role">
                                {node.status}
                            </div>
                        </div>
                    </div>            
                );
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
    return { nodes: state.nodes, selectedNode: state.selectedNode };
}

export default connect(mapStateToProps, { fetchAllContent, selectNode })(NodeList);
