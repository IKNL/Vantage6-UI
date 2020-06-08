import React from 'react';
import { connect } from 'react-redux';

class OrgHeader extends React.Component{
    render(){
        const org = this.props.organizations.find((org) => org.id === this.props.orgId)
        if(!org){
            return null;
        }

        return (
            <div className="ui image label large">
                {org.name}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { organizations: state.organizations };
}

export default connect(mapStateToProps)(OrgHeader);