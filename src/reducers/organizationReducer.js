export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ORGANISATION':
            return action.payload;
        default:
            return state;
    }
};