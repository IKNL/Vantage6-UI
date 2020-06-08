import jsonPlaceholder from '../apis/jsonPlaceholder';
import { SetUserID } from '../actions';

export default (state = [], action) => {
    switch(action.type){
        case 'LOGIN':
            if(action.payload != null){
                jsonPlaceholder.defaults.headers.get['authorization'] = `Bearer ${action.payload.access_token}`;
                jsonPlaceholder.defaults.headers.post['authorization'] = `Bearer ${action.payload.access_token}`;
                jsonPlaceholder.defaults.headers.patch['authorization'] = `Bearer ${action.payload.access_token}`;
            }

            return [action.payload];
        default:
            return state;
    }
};