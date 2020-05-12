import jsonPlaceholder from '../apis/jsonPlaceholder';

export const editUser = (editUser, formValues) => async dispatch => {
    jsonPlaceholder.patch('./user/' + editUser, formValues);
};