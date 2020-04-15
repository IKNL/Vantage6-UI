import React from 'react';
import { connect } from 'react-redux';
import OrgHeader from './OrgHeader';

const UserDetail = ({user}) => {
    if (!user){
        return <div>Select a user</div>
    }
    return (
        <div className="ui segment">
            
            <div className="content">
                    <div className="summary">
                        <OrgHeader orgId={user.organization.id} />
                    </div>
            </div>
            <br></br>
            <div className="content">
                <div className="ui header">{user.firstname} {user.lastname}</div>
            </div>
            <div className="content">
            <div className="event">
                    <div className="content">
                    <div className="summary">
                        Username: {user.username}
                    </div>
                    </div>
                </div>


                <h4 className="ui sub header">Activity</h4>
                <div className="ui small feed">
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        Last seen: {user.last_seen}
                    </div>
                    </div>
                </div>

                </div>
            </div>
            <div className="ui divider"></div>
            <button className="ui button green">Edit user</button>
            <button className="ui button red">Delete user</button>
        </div>
        );
};

const mapStateToProps = (state) => {
    return { user: state.selectedUser }
};

export default connect(mapStateToProps)(UserDetail);
