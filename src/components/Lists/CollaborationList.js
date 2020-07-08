import React from 'react';
import { connect } from 'react-redux';

import { selectCollab, fetchAllContent } from '../../actions';
import NodeIcon from '../NodeIcon';
import OrgIcon from '../OrgIcon';
import CollaborationActive from '../CollaborationActive';

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
            console.log(collab);
            if(collab.firstname !== null){
                return (
                    <CollaborationActive id={collab.id} name={collab.name} 
                    organizations={this.getOrgIds(collab.organizations)} tasks={collab.tasks} />
                );
            }
            
        });
    }

    render(){
        return (
            <div className="ui very relaxed items">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { collaborations: state.collaborations, selectedCollab: state.selectedCollab };
}

export default connect(mapStateToProps, { fetchAllContent, selectCollab })(CollaborationList);
