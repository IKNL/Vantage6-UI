import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Login from './Login';
import { isEmpty } from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import { fetchProfile } from '../actions';

class App extends React.Component {

    constructor(props){
        super(props);

        if (!isEmpty(props.token)){
            jsonPlaceholder.defaults.headers.common['authorization'] = `Bearer ${props.token.access_token}`;
        }

    }

    render(){
        if(!isEmpty(this.props.token)){
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
