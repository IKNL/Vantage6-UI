import React from 'react';
import { connect } from 'react-redux';

import { fetchAllContent } from '../../actions';
import Organization from '../Organization';

class OrganizationList extends React.Component {

    componentDidMount(){
        this.props.fetchAllContent();
    }

    renderList(){
        return this.props.organizations.map((org, props) => {
            if(org.id !== null){
                return (
                    <Organization name={org.name} id={org.id} key={org.id}
                    users={org.users} nodes={org.nodes} />
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
    return { organizations: state.organizations };
}

export default connect(mapStateToProps, { fetchAllContent })(OrganizationList);
