export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ORGANIZATIONS':
            return action.payload;
        default:
            return state;
    }
};