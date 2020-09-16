import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import AppProvider from './components/AppProvider';
import combineReducers from './reducers';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const persistConfig = {
    key: 'root',
    blacklist: ["selectedPage", "organization"], // just for debugging purposes
    storage,
  }
let persistedReducer = persistReducer(persistConfig, combineReducers)
const store = createStore(persistedReducer, applyMiddleware(reduxThunk));
let persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.querySelector("#root")
);