import React from 'react';
import { connect } from 'react-redux';
import { selectUser, fetchAllContent} from '../actions';

class UserList extends React.Component {

    componentDidMount(){
        this.props.fetchAllContent();
    }

    userIcon(role){
        switch(role){
            case('admin'):
                return (<i className='chess king icon middle aligned'  />);
            case('researcher'):
                return (<i className='chess knight icon middle aligned'  />);
            default:
                return <i className='chess pawn icon middle aligned'  />;
        }

    }

    renderList(){
        return this.props.users.map((user, props) => {
            if(user.firstname !== null){

                return (
                    <div className="item" key={user.id}
                    onClick={() => this.props.selectUser(user)}
                    >
                        {this.userIcon(user.roles)}
                        <div className="content">
                            <div className="ui sub header user-name">
                                {user.firstname} {user.lastname} 
                            </div>
                            <div className="ui sub header user-role">
                                {user.roles}
                            </div>
                        </div>
                    </div>            
                );
            }
            
        });
    }

    render(){
        return (
            <div className="ui relaxed divided list">
                <h2 className="ui">Users</h2>
                {this.renderList()}

                <div className="item">
                <i className='chess icon middle aligned'  />
                    <div className="content">
                        <div className="ui sub header user-name green">
                            CREATE NEW
                        </div>
                        <div className="ui sub header user-role green">
                            USER
                        </div>
                    </div>
                </div>        
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users, selectedUser: state.selectedUser };
}

export default connect(mapStateToProps, { fetchAllContent, selectUser })(UserList);
