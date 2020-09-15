import jsonPlaceholder from '../apis/jsonPlaceholder';

export const editUserRemote = (editUser, formValues) => async dispatch => {
    jsonPlaceholder.patch('./user/' + editUser, formValues);
};

export const login = (formValues) => async dispatch => {
    await jsonPlaceholder.post('./token/user', formValues).then(response => {
        dispatch({type: 'LOGIN', payload: response.data });
    }).catch(error => {
        dispatch({type: 'FAILED_LOGIN', payload: "Login failed: incorrect credentials" });
    });
};

export const returningVisit = (storedData) => async dispatch => {
    dispatch({type: 'LOGIN', payload: storedData });
}

export const register = (formValues) => async dispatch => {
    const response = await jsonPlaceholder.post('./user', formValues);
    dispatch({type: 'REGISTER', payload: response.data });
};

export const reset = (formValues) => async dispatch => {
    const response = await jsonPlaceholder.get('./token/user', formValues);
    dispatch({type: 'FORGOT_PASS', payload: response.data });
};

export const leaveCollaboration = (collabID, orgID) => async dispatch => {
    //make orgID leave collabID
}

export const createCollaboration = (formValues) => async dispatch => {
    // const response = await jsonPlaceholder.get('./token/user', formValues);
    // dispatch({type: 'CREATED_COLLABORATION', payload: response.data });
};



export const logOut = () => async dispatch => {
    dispatch({type: 'LOGIN', payload: null });
};