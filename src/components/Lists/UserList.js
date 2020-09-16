import React from 'react';
import { connect } from 'react-redux';
import { selectUser, editUser, fetchUsers, selectPage} from '../../actions';
import User from '../User';

class UserList extends React.Component {

    componentDidMount(){
        this.props.fetchUsers();
    }

    renderList(){
        return this.props.users.map((user, props) => {
            if(user.firstname !== null){
                console.log(user);
                return (
                    <User
                    user={user}
                    selectUser={this.props.selectUser}
                    selectPage={this.props.selectPage}
                    key={`user-id-${user.id}`}/>
                );
            }
        });
    }

    render(){
        return (
            <div className="ui">
                <div className="ui list">
                    {this.renderList()}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users, selectedUser: state.selectedUser };
}

export default connect(mapStateToProps, { fetchUsers, selectUser, editUser, selectPage })(UserList);
