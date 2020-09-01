import Cookies from 'universal-cookie';

import jsonPlaceholder from '../apis/jsonPlaceholder';
import { fetchProfile } from '../actions';


export default (state = [], action) => {

    
    switch(action.type){
        
        case 'LOGIN':
            const cookie = new Cookies();
            if(action.payload != null){
                jsonPlaceholder.defaults.headers.get['authorization'] = `Bearer ${action.payload.access_token}`;
                jsonPlaceholder.defaults.headers.post['authorization'] = `Bearer ${action.payload.access_token}`;
                jsonPlaceholder.defaults.headers.patch['authorization'] = `Bearer ${action.payload.access_token}`;
                fetchProfile(action.payload.user_url);
                cookie.set('token', action, { path: '/'});
            }
            return [action.payload];
        default:
            return state;
    }
};