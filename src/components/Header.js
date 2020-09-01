import React from 'react';
import { connect } from 'react-redux';

import './Header.css';
import logo from '../images/artboard1.png'
import { selectPage } from '../actions';
import { logOut } from '../actions/upstreamActions';

class Header extends React.Component {

    state = {confirmingLogOut: false};

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
        return(
        <div className="Header">
            <img src={logo} height='60' alt="logo" />
            <div className="ui secondary menu header-items">
                <div className="right menu">
                    <a className="item" onClick={() => this.props.selectPage(7)}>My profile</a>
                    <a className="item" onClick={() => this.props.selectPage(8)}>My organization</a>
                    {this.logOutModal()}
                </div>
            </div>
        </div>);
    } 
};

const mapStateToProps = (state) => {
    return { user: state.user };
}


export default connect(mapStateToProps, { selectPage, logOut })(Header);