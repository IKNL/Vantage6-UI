import React from 'react';
import { connect } from 'react-redux';

class OrgHeader extends React.Component{
    render(){
        const org = this.props.organisations.find((org) => org.id === this.props.orgId)
        console.log(this.props.orgId);
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
    return { organisations: state.organisations };
}

export default connect(mapStateToProps)(OrgHeader);