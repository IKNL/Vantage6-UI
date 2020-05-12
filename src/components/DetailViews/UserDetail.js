import React from 'react';
import { connect } from 'react-redux';

import { selectPage, editUser } from '../../actions';
import OrgHeader from '../OrgHeader';



class UserDetail extends React.Component {

    render(){
        if (!this.props.user){
            return <div>Select a user</div>
        }
    
        
    
        return (
            <div className="ui segment fluid">
                
                <div className="content">
                        <div className="summary">
                            <OrgHeader orgId={this.props.user.organization.id} />
                        </div>
                </div>
                <br></br>
                <div className="content">
                    <div className="ui header">{this.props.user.firstname} {this.props.user.lastname}</div>
                </div>
                <div className="content">
                <div className="event">
                        <div className="content">
                        <div className="summary">
                            Username: {this.props.user.username}
                        </div>
                        </div>
                    </div>
    
    
                    <h4 className="ui sub header">Activity</h4>
                    <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                        <div className="summary">
                            Last seen: {this.props.user.last_seen}
                        </div>
                        </div>
                    </div>
    
                    </div>
                </div>
    
                <div className="ui divider"></div>
                
                <button className="ui button green" onClick={() => this.props.editUser(this.props.user.id) }>
                    Edit user
                </button>
                <button className="ui button red">Delete user</button>
                
            </div>
            );
    }
    
};

const mapStateToProps = (state) => {
    return { user: state.selectedUser }
};

export default connect(mapStateToProps, { selectPage, editUser })(UserDetail);
