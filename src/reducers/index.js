import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


import userReducer from './userReducer';
import collabReducer from './collabReducer';
import orgReducer from './orgReducer';
import nodeReducer from './nodeReducer';
import loginReducer from './loginReducer';
import resultReducer from './resultReducer';
import algorithmReducer from './algorithmReducer';
import collaborationNodeReducer from './collaborationNodeReducer';



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

const selectedResultReducer = (selectedResult = null, action) => {
    if(action.type === 'RESULT_SELECTED'){
        return action.payload;
    }
    return selectedResult;
}

const selectedOrgReducer = (selectedOrg = null, action) => {
    if(action.type === 'ORGANIZATION_SELECTED'){
        return action.payload;
    }
    return selectedOrg;
}

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

const setUserReducer = (user = null, action) => {
    if(action.type === 'FETCH_ACTIVE_USER'){
        console.log("Active user set to: " + action.payload);
        return action.payload;
    }
    return user;
}

const logoutReducer = (user = null, token = null, action) => {
    if(action.type === 'LOGGED_OUT'){

    }
    return user;
}

const failedLoginReducer = (loginFailed = "", action) => {
    if(action.type === 'FAILED_LOGIN'){
        console.log(action.payload);
        return action.payload;
    }

    return loginFailed;
}


export default combineReducers({
    users: userReducer,
    organizations: orgReducer,
    selectedOrg: selectedOrgReducer,
    selectedUser: selectedUserReducer,
    isEditing: editUserReducer,
    selectedPage: selectedPageReducer,
    collaborations: collabReducer,
    selectedCollab: selectedCollabReducer,
    algorithms: algorithmReducer,
    nodes: nodeReducer,
    selectedNode: selectedNodeReducer,
    token: loginReducer,
    results: resultReducer,
    selectedResult: selectedResultReducer,
    form: formReducer,
    user: setUserReducer,
    failedLogin: failedLoginReducer,
    collaborationNodes: collaborationNodeReducer
});