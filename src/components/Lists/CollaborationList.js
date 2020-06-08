import React from 'react';
import { connect } from 'react-redux';

import { selectCollab, fetchAllContent } from '../../actions';
import NodeIcon from '../NodeIcon';
import OrgIcon from '../OrgIcon';

class CollaborationList extends React.Component {

    componentDidMount(){
        this.props.fetchAllContent();
    }

    getNodeIds(nodes){

        return nodes.map((node) => {
            return <NodeIcon nodeID={node.id} key={node.id} />;
        });
    }

    getOrgIds(orgs){

        return orgs.map((org) => {
            return <OrgIcon orgID={org.id} key={org.id} />;
        });
    }

    renderList(){
        return this.props.collaborations.map((collab, props) => {
            if(collab.firstname !== null){
                return (
                    <div className="item" key={collab.id}
                    onClick={() => this.props.selectCollab(collab)}
                    >
                        
                        <div className="ui header fluid align middle">{collab.name}</div>
                        <div className="content ui three column grid">
                            <div className="column fluid align middle">Nodes: {this.getNodeIds(collab.nodes)}</div>
                            <div className="column fluid align middle">Organizations: {this.getOrgIds(collab.organizations)}</div>
                            <div className="column fluid align middle right floated">Tasks completed: <div className="ui button">{collab.tasks.length}</div></div>
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
    return { collaborations: state.collaborations, selectedCollab: state.selectedCollab };
}

export default connect(mapStateToProps, { fetchAllContent, selectCollab })(CollaborationList);
