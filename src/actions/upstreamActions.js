import jsonPlaceholder from '../apis/jsonPlaceholder';

export const editUser = (editUser, formValues) => async dispatch => {
    jsonPlaceholder.patch('./user/' + editUser, formValues);
};

export const login = (formValues) => async dispatch => {
    const response = await jsonPlaceholder.post('./token/user', formValues);
    dispatch({type: 'LOGIN', payload: response.data });
    
};

export const logOut = () => async dispatch => {
    dispatch({type: 'LOGIN', payload: undefined });
};