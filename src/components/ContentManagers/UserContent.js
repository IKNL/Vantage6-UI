import React from 'react';
import { connect } from 'react-redux';

import UserList from '../Lists/UserList';
import UserDetail from '../DetailViews/UserDetail';
import UserDetailEdit from '../DetailViews/UserDetailEdit';
const UserContent = (props) => {

    const detailfield = () => {
        if(props.isEditing){
            return (<div>
                <div><UserDetail /></div>
                <div><UserDetailEdit editingUser={props.isEditing} /></div>
                </div>)
        }else{
            return (<div><UserDetail /></div>)
        }
        
    }

    return(
        <div>
                <div className="content main-content">
                    <div className="ui two column grid">
                        <div className="column">
                            <h2 className="ui left aligned header">
                            USERS
                            </h2>
                            <div className="ui raised fluid card">
                            <UserList />
                            </div>
                        </div>
                        <div className="column">
                        <h2 className="ui left aligned header">
                        SELECTED USER
                        </h2>
                        {detailfield()}
                        </div>
                    </div>
                </div>
            </div>          
    );
}

const mapStateToProps = (state) => {
    return { user: state.selectedUser, isEditing: state.isEditing }
};

export default connect(mapStateToProps)(UserContent);