import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import combineReducers from '../reducers/index'
import storage from 'redux-persist/lib/storage'


class AppProvider extends Component {


    constructor(props) {
        super(props);
        this.state = { rehydrated: false };
    }

    componentWillMount() {
        const opts = {
            key: 'root',
            whitelist: ["login"], // <-- Your auth/user reducer storing the cookie
            storage
        };

        persistReducer(opts, combineReducers, () => {
            this.setState({ rehydrated: true });
        });
    }

    render() {
        // if (!this.state.rehydrated) {
        //     return null;
        // }

        return (
            <Provider store={this.props.store}>
                {this.props.children}
            </Provider>
        );
    }

    static propTypes = {
        store: PropTypes.object.isRequired,
        children: PropTypes.node
    }

}


AppProvider.propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.node
}



export default AppProvider;