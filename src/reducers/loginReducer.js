import Cookies from 'universal-cookie';

import jsonPlaceholder from '../apis/jsonPlaceholder';
import { fetchActiveUser } from '../actions';


export default (state = {}, action) => {


    switch(action.type){

        case 'LOGIN':

            if(action.payload != null){
                fetchActiveUser(action.payload.user_url);
                jsonPlaceholder.defaults.headers.common['authorization'] = `Bearer ${action.payload.access_token}`;

            }

            return action.payload;
        default:
            return state;
    }
};