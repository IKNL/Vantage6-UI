import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Login from './Login';

class App extends React.Component {

    render(){
        if(this.props.token[0] !== undefined){
            return( <div>
                <Header />
                <Sidebar />
                <div className="content main-content">
                    <MainContent />
                </div>
            </div>          
            );      
        }else{
            return( <div>
                <div className="ui centered grid container">
                    <Login />    
                </div>
            </div>          
            );  
        }
    };
}

const mapStateToProps = (state) => {
    return { token: state.token };
}

export default connect(mapStateToProps)(App);


