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

    renderList(nodeID){
        console.log(this.props.nodes);
        return (
                    <div className="item" key={this.props.nodes.id}
                    onClick={() => this.props.selectNode(nodeID)}
                    >
                        {this.nodeIcon(this.props.nodes.status)}
                        <div className="content">
                            <div className="ui sub header user-name">
                                {this.props.nodes.name} 
                            </div>
                            <div className="ui sub header user-role">
                                {this.props.nodes.status}
                            </div>
                        </div>
                    </div>            
            
        );
    }

    render(){
        console.log(this.props.node);
        return (
            <div className="ui relaxed divided list">
                {this.renderList(1)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { nodes: state.nodes, selectedNode: state.selectedNode };
}

export default connect(mapStateToProps, { fetchAllContent, selectNode })(NodeList);
