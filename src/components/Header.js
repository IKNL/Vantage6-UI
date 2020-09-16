import React from 'react';
import { connect } from 'react-redux';

import logo from '../images/artboard1.png'
import { selectPage, fetchActiveUser } from '../actions';
import { logOut } from '../actions/upstreamActions';
import { isEmpty } from 'lodash';

class Header extends React.Component {



    constructor(props){
        super(props);
        this.state = {confirmingLogOut: false, loading: true};
        console.log(props.token.user_url)
        props.fetchActiveUser(props.token.user_url);
    }


    fetchUser(){
        if(this.props.user){
            return <div className="ui sub header">{this.props.user.id}</div>;
        }else{
            return <div className="ui sub header"></div>
        }
    }

    logOutPrompt(){
        this.setState({confirmingLogOut: true});
    }

    logOutModal(){
        if(this.state.confirmingLogOut){
            return(
                <div className="ui buttons">
                    <button className="ui positive button" onClick={() => this.confirmLogout()}>Log out</button>
                    <div className="or"></div>
                    <button className="ui button" onClick={() => this.cancelLogout()}>Cancel</button>
                </div>
            );
        }else{
            return(
                <button className="ui button" onClick={() => this.logOutPrompt()}>Log out</button>
            );
        }
    }

    confirmLogout(){this.props.logOut()};

    cancelLogout(){this.setState({confirmingLogOut: false})};


    render(){
        console.log(this.state.loading);
        var username = (isEmpty(this.props.user)) ? "..." : this.props.user.username

        return(
        <div className="Header">
            <img src={logo} height='60' alt="logo" />
            <div className="ui secondary menu header-items">
                <div className="right menu">
                    <a className="item" onClick={() => this.props.selectPage(7)}>{username}</a>
                    <a className="item" onClick={() => this.props.selectPage(8)}>My Organization</a>
                    {this.logOutModal()}
                </div>
            </div>
        </div>);
    }
};

const mapStateToProps = (state) => {
    return { user: state.user, token: state.token };
}


export default connect(mapStateToProps, { selectPage, logOut, fetchActiveUser })(Header);