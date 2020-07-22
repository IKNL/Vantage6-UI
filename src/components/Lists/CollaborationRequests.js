import React from 'react';
import { connect } from 'react-redux';

import { fetchAllContent } from '../../actions';
import OrgIcon from '../OrgIcon';
import CollaborationRequest from '../CollaborationRequest';

class CollaborationRequests extends React.Component {

    componentDidMount(){
        this.props.fetchAllContent();
    }

    getOrgIds(orgs){
        return orgs.map((org) => {
            return <OrgIcon orgID={org.id} key={org.id} />;
        });
    }

    renderList(){
        return this.props.collaborations.map((collab, props) => {
            if(collab.id !== null){
                return (
                    <CollaborationRequest name={collab.name} id={collab.id} key={collab.id}
                    organizations={collab.organizations} />
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
    return { collaborations: state.collaborations, collaborationRequests: state.collaborationRequests };
}

export default connect(mapStateToProps, { fetchAllContent })(CollaborationRequests);
