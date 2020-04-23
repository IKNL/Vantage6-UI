import { combineReducers } from 'redux';
import userReducer from './userReducer';
import orgReducer from './orgReducer';
import nodeReducer from './nodeReducer';
import loginReducer from './loginReducer';
import resultReducer from './resultReducer';

const selectedUserReducer = (selectedUser = null, action) => {
    if(action.type === 'USER_SELECTED'){
        return action.payload;
    }
    return selectedUser;
};

const selectedNodeReducer = (selectedNode = null, action) => {
    if(action.type === 'NODE_SELECTED'){
        return action.payload;
    }
    return selectedNode;
};

const selectedPageReducer = (selectedPage = null, action) => {
    if(action.type === 'PAGE_SELECTED'){
        return action.payload;
    }
    return selectedPage;
};



export default combineReducers({
    users: userReducer,
    organisations: orgReducer,
    selectedUser: selectedUserReducer,
    selectedPage: selectedPageReducer,
    nodes: nodeReducer,
    selectedNode: selectedNodeReducer,
    token: loginReducer,
    results: resultReducer
});