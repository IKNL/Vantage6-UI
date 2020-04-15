export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ORGANISATION':
            return [...state, action.payload];
        default:
            return state;
    }
};