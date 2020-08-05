import jsonPlaceholder from '../apis/jsonPlaceholder';
import { fetchProfile } from '../actions';

export default (state = [], action) => {
    switch(action.type){
        case 'LOGIN':
            if(action.payload != null){
                jsonPlaceholder.defaults.headers.get['authorization'] = `Bearer ${action.payload.access_token}`;
                jsonPlaceholder.defaults.headers.post['authorization'] = `Bearer ${action.payload.access_token}`;
                jsonPlaceholder.defaults.headers.patch['authorization'] = `Bearer ${action.payload.access_token}`;
            }
            console.log(action.payload);
            fetchProfile(action.payload.user_url);
            return [action.payload];
        default:
            return state;
    }
};