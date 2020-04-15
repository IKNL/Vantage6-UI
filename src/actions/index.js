import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchAllContent = () => async (dispatch, getState) => {
    await dispatch(fetchUsers());
    console.log(getState().users)
    const orgs = _.uniq(_.map(getState().users, 'organization.id'));
    orgs.forEach(org => dispatch(fetchOrg(org)));

    await dispatch(fetchNode(8));
    console.log(getState().nodes)
    // const nodes = _.uniq(_.map(getState().nodes, 'id'));
    // nodes.forEach(node => dispatch(fetchNode(node)));

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

//SELECT A SINGLE USER FROM LIST
export const selectUser = (user) => {
    return{
        type: 'USER_SELECTED',
        payload: user
    };
};

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
    dispatch({type: 'FETCH_NODES', payload: response.data });
};

export const selectNode = (node) => {
    return{
        type: 'NODE_SELECTED',
        payload: node
    };
};

//LOGIN
export const logIn = () => async dispatch => {
    const response = await jsonPlaceholder.post(`/token/user`, {
            password: "root",
            username: "root"
    });
    console.log("Logged in");
    dispatch({type: 'LOGIN', payload: response.data });
};