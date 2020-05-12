import React from 'react';
import './Header.css';
import logo from '../images/artboard1.png'
class Header extends React.Component {

    state = { username: "ROOT" }

    logIn(credentials){

    }

    render(){
        return(
        <div className="Header">
            <img src={logo} height='60' alt="logo" />
            <div className="user-login item horizontal list">
                <div className="content">
                    <div className="ui sub header">{this.state.username}</div>
                    USER ROLE
                </div>
            </div>
            <button className="ui right floated button login-button">Log Out</button>
        </div>);
    } 
};

export default Header;