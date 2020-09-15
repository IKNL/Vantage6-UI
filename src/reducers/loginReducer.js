import Cookies from 'universal-cookie';

import jsonPlaceholder from '../apis/jsonPlaceholder';
import { fetchProfile } from '../actions';


export default (state = {}, action) => {


    switch(action.type){

        case 'LOGIN':

            if(action.payload != null){
                jsonPlaceholder.defaults.headers.common['authorization'] = `Bearer ${action.payload.access_token}`;
                fetchProfile(action.payload.user_url);
            }

            return action.payload;
        default:
            return state;
    }
};