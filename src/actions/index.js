import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchAllContent = () => async (dispatch, getState) => {

    await dispatch(fetchUsers());
    await dispatch(fetchResults());
    await dispatch(fetchCollaborations());
    await dispatch(fetchNodes());
    await dispatch(fetchOrgs());
    const orgs = _.uniq(_.map(getState().users, 'organization.id'));
    orgs.forEach(org => dispatch(fetchOrg(org)));
};

export const fetchProfile = (userUrl) => {
     fetchActiveUser(userUrl);
}

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
    const response = await jsonPlaceholder.get(id);
    dispatch({type: 'FETCH_USER', payload: response.data });
};

export const fetchActiveUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(id);
    dispatch({type: 'FETCH_ACTIVE_USER', payload: response.data });
};

//FETCH ALL RESULTS
export const fetchResults    = () => async function(dispatch){
    const response = await jsonPlaceholder.get('/result');
    dispatch({type: "FETCH_RESULTS", payload: response.data });
};

export const selectResult = (result) => {
    return{
        type: 'RESULT_SELECTED',
        payload: result
    };
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

//ALGORITHMS
export const fetchAlgorithms = () => async function(dispatch){
    const response = await jsonPlaceholder.get('./collaboration');
    dispatch({type:"FETCH_ALGORITHMS", payload: response.data});
}

export const selectAlgorithm = (algo) => {
    return{
        type: 'ALGORITHM_SELECTED',
        payload: algo
    }
}

export const fetchOrgs = () => async function(dispatch){
    const response = await jsonPlaceholder.get('./organization');
    dispatch({type:"FETCH_ORGANIZATIONS", payload: response.data});
}

//FETCH A SINGLE ORGANIZATION
export const fetchOrg = (id) => async function(dispatch){
    if(id){
        const response = await jsonPlaceholder.get(`/organization/${id}`);
        dispatch({type: 'FETCH_ORGANISATION', payload: response.data });
    }
}

export const selectOrg = (id) => {
    return{
        type: 'ORGANIZATION_SELECTED',
        payload: id
    }
}

export const fetchOrgName = (id) => async function(){
    if(id){
        const response = jsonPlaceholder.get(`/organization/${id}`);
        return response.data.name;
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

export const failedLogin = () => {
    return{
        type: 'FAILED_LOGIN',
        payload:  true
    };
};

// //LOGIN
// export const logIn = ({uname, pword}) => async dispatch => {
    
//     console.log("Logging in");
//     const response = await jsonPlaceholder.post(`/token/user`, {
//             password: pword,
//             username: uname
//     });
//     console.log("Logged in");
//     dispatch({type: 'LOGIN', payload: response.data });
// };

export const getUsername = (url) => async dispatch => {

    const response = await fetchUser(url);
    dispatch({
        type: 'USER_LOGGED_IN',
        payload: response
    })
}
