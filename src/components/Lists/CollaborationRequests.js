import React from 'react';
import { connect } from 'react-redux';

import { fetchAllContent } from '../../actions';
import NodeIcon from '../NodeIcon';
import OrgIcon from '../OrgIcon';

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
            if(collab.firstname !== null){
                return (
                    <div className="item" key={collab.id}>
                        <div className="ui header fluid align middle">Request to join collaboration &nbsp;
                            <div className="ui button">{collab.name}</div> with &nbsp; {this.getOrgIds(collab.organizations)}
                            <div className="ui right floated">
                                <button className="ui button green" onClick={() => console.log('accepting') /*this.props.acceptCollab(collab)*/}>Accept request</button>
                                <button className="ui button red" onClick={() => console.log('rejecting') /*this.props.acceptCollab(collab)*/}>Reject request</button>                                
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
    return { collaborations: state.collaborations, collaborationRequests: state.collaborationRequests };
}

export default connect(mapStateToProps, { fetchAllContent })(CollaborationRequests);
