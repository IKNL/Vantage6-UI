import { combineReducers } from 'redux';
import userReducer from './userReducer';
import orgReducer from './orgReducer';
import nodeReducer from './nodeReducer';
import loginReducer from './loginReducer';

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



export default combineReducers({
    users: userReducer,
    organisations: orgReducer,
    selectedUser: selectedUserReducer,
    nodes: nodeReducer,
    selectedNode: selectedNodeReducer,
    token: loginReducer
});