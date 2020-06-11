import React from 'react';
import { connect } from 'react-redux';

import { selectPage, editUser, fetchProfile } from '../../actions';
import OrgHeader from '../OrgHeader';



class UserDetail extends React.Component {

    canEdit(){
        if(this.props.activeUser){
            if(this.props.activeUser.type === "user"){
                return (<div>
                    <button className="ui button green" onClick={() => this.props.editUser(this.props.userSelected.id) }>
                    Edit user
                    </button>
                    <button className="ui button red">Delete user</button>
                    </div>
                );
            }
        }else{
            this.props.fetchProfile('user/' + this.props.userSelected.id);
        }
    }

    render(){
        if (!this.props.userSelected){
            return <div>Select a user</div>
        }
    
        return (
            <div className="ui segment fluid">
                
                <div className="content">
                        <div className="summary">
                            <OrgHeader orgId={this.props.userSelected.organization.id} />
                        </div>
                </div>
                <br></br>
                <div className="content">
                    <div className="ui header">{this.props.userSelected.firstname} {this.props.userSelected.lastname}</div>
                </div>
                <div className="content">
                <div className="event">
                        <div className="content">
                        <div className="summary">
                            Username: {this.props.userSelected.username}
                        </div>
                        </div>
                    </div>
    
    
                    <h4 className="ui sub header">Activity</h4>
                    <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                        <div className="summary">
                            Last seen: {this.props.userSelected.last_seen}
                        </div>
                        </div>
                    </div>
    
                    </div>
                </div>
    
                <div className="ui divider"></div>
                {this.canEdit()}

                
            </div>
            );
    }
    
};

const mapStateToProps = (state) => {
    return { userSelected: state.selectedUser, activeUser: state.user }
};

export default connect(mapStateToProps, { fetchProfile, selectPage, editUser })(UserDetail);
