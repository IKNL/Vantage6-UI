import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchAllContent = () => async (dispatch, getState) => {

    await dispatch(fetchUsers());
    await dispatch(fetchResults());
    await dispatch(fetchCollaborations());
    await dispatch(fetchNodes());
    const orgs = _.uniq(_.map(getState().users, 'organization.id'));
    orgs.forEach(org => dispatch(fetchOrg(org)));


};


//SELECT A PAGE FROM THE SIDEBAR TO VIEW
export const selectPage = (page) => {
    return{
        type: 'PAGE_SELECTED',
        payload: page
    };
};

//FETCH ALL USERS
export const fetchUsers = () => async function(dispatch){
    const response = await jsonPlaceholder.get('/user');
    dispatch({type: "FETCH_USERS", payload: response.data });
};

//FETCH A SINGLE USER
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/user/'${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data });
};

//FETCH ALL RESULTS
export const fetchResults    = () => async function(dispatch){
    const response = await jsonPlaceholder.get('/result');
    dispatch({type: "FETCH_RESULTS", payload: response.data });
};

//SELECT A SINGLE USER FROM LIST
export const selectUser = (user) => {
    return{
        type: 'USER_SELECTED',
        payload: user
    };
};

export const editUser = (user) => {
    return{
        type: 'EDIT_USER',
        payload: user
    };
};


//COLLABORATIONS
export const fetchCollaborations = () => async function(dispatch){
    const response = await jsonPlaceholder.get('./collaboration');
    dispatch({type:"FETCH_COLLABORATIONS", payload: response.data});
}

export const selectCollab = (collab) => {
    return{
        type: 'COLLABORATION_SELECTED',
        payload: collab
    }
}

//FETCH A SINGLE ORGANIZATION
export const fetchOrg = (id) => async function(dispatch){
    if(id){
        const response = await jsonPlaceholder.get(`/organization/${id}`);
        dispatch({type: 'FETCH_ORGANISATION', payload: response.data });
    }
}

//FETCH NODES
export const fetchNodes = () => async function(dispatch){
    const response = await jsonPlaceholder.get('/node');
    dispatch({type: "FETCH_NODES", payload: response.data });
};

//FETCH A SINGLE NODE
export const fetchNode = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/node/${id}`);
    dispatch({type: 'FETCH_NODE', payload: response.data });
};

export const selectNode = (node) => {
    return{
        type: 'NODE_SELECTED',
        payload: node
    };
};

//LOGIN
export const logIn = () => async dispatch => {
    
    console.log("Logging in");
    const response = await jsonPlaceholder.post(`/token/user`, {
            password: "password",
            username: "frank@iknl.nl"
    });
    console.log("Logged in");
    dispatch({type: 'LOGIN', payload: response.data });
};