import React from 'react';
import { connect } from 'react-redux';
import { selectUser, editUser, fetchAllContent, selectPage} from '../../actions';
import { random } from 'lodash';

class PermissionsList extends React.Component {

    componentDidMount(){
        this.props.fetchAllContent();
    }

    permissions = [
        {name: "read", value: true},
        {name: "create", value: false},
        {name: "update", value: true},
        {name: "delete", value: false}
    ]

    returnPermissions(){
        return this.permissions.map((perm) => {
            const rand = Math.random() > 0.66 ? true : false;
            if(rand === true){
                return (
                    <button className="ui button primary">{perm.name}</button>
                );
            }else{
                return (
                    <button className="ui button">{perm.name}</button>
                );
            }
            
        });
    }

    types = [
        {name: "owner", value: true},
        {name: "organization", value: false}
    ]

    returnTypes(user){
        return this.types.map((type) => { // return user.types.map((type) => {}
            const rand = Math.random() > 0.5 ? true : false; 
            if(rand === true){//type.value === true){
                return (
                    <button className="ui button primary">{type.name}</button>
                );
            }else{
                return (
                    <button className="ui button">{type.name}</button>
                );
            }
            
        });
    }

    renderList(){
        return this.props.users.map((user, props) => {
            if(user.firstname !== null){
                console.log(user);
                return (
                    <div className="ui fluid segment">
                    <div className="ui three column grid"> 
                        <div className="ui column">    
                            <h4 class="ui header">
                                <i className="ui user icon"></i>
                                <div class="content header">
                                    {user.firstname} {user.lastname} 
                                    <div class="sub header">{user.username}</div>
                                </div>
                            </h4>
                        </div>
                        <div className="ui column">    
                            <div className="ui buttons">
                                {this.returnTypes()}
                            </div>
                        </div>
                        <div className="ui column">    
                            <div className="ui buttons">
                                {this.returnPermissions()}
                            </div>
                            
                        </div>
                    </div>
                    </div>
                );
            }
        });
    }

    render(){
        return (
            <div className="ui">
                <div className="ui relaxed list">
                    {this.renderList()}
                </div>
                
            </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users, selectedUser: state.selectedUser };
}

export default connect(mapStateToProps, { fetchAllContent, selectUser, editUser, selectPage })(PermissionsList);
