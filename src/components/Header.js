import React from 'react';
import './Header.css';
import logo from './artboard1.png'
class Header extends React.Component {

    state = { username: "ROOT" }

    logIn(credentials){

    }

    render(){
        return(
        <div className="Header">
            <img src={logo} height='60' alt="logo" />
            <p id="username">Logged in as: {this.state.username}</p>
            <button className="ui right floated button login-button">Log Out</button>
        </div>);
    } 
};

export default Header;