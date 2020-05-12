import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


import userReducer from './userReducer';
import collabReducer from './collabReducer';
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

const editUserReducer = (isEditing = null, action) => {
    if(action.type === 'EDIT_USER'){
        return action.payload;
    }
    return isEditing;
};

const selectedNodeReducer = (selectedNode = null, action) => {
    if(action.type === 'NODE_SELECTED'){
        return action.payload;
    }
    return selectedNode;
};

const selectedCollabReducer = (selectedCollab = null, action) => {
    if(action.type === 'COLLABORATION_SELECTED'){
        return action.payload;
    }
    return selectedCollab;
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
    isEditing: editUserReducer,
    selectedPage: selectedPageReducer,
    collaborations: collabReducer,
    selectedCollab: selectedCollabReducer,
    nodes: nodeReducer,
    selectedNode: selectedNodeReducer,
    token: loginReducer,
    results: resultReducer,
    form: formReducer
});