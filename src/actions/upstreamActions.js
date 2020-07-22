import jsonPlaceholder from '../apis/jsonPlaceholder';

export const editUserRemote = (editUser, formValues) => async dispatch => {
    jsonPlaceholder.patch('./user/' + editUser, formValues);
};

export const login = (formValues) => async dispatch => {
    const response = await jsonPlaceholder.post('./token/user', formValues);
    dispatch({type: 'LOGIN', payload: response.data });
    
};

export const register = (formValues) => async dispatch => {
    const response = await jsonPlaceholder.post('./user', formValues);
    dispatch({type: 'REGISTER', payload: response.data });
};

export const reset = (formValues) => async dispatch => {
    const response = await jsonPlaceholder.get('./token/user', formValues);
    dispatch({type: 'FORGOT_PASS', payload: response.data });
};



export const logOut = () => async dispatch => {
    dispatch({type: 'LOGIN', payload: undefined });
};