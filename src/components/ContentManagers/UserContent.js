import React from 'react';
import { connect } from 'react-redux';

import PermissionsList from '../Lists/PermissionsList';
const UserContent = (props) => {

    return(
        <div>
            <div className="content main-content">
                <div>
                    <h2 className="ui left aligned header">
                    ADMINISTRATOR VIEW
                    </h2>
                    <PermissionsList />
                </div>
            </div>
        </div>          
    );
}

const mapStateToProps = (state) => {
    return { user: state.selectedUser, isEditing: state.isEditing }
};

export default connect(mapStateToProps)(UserContent);