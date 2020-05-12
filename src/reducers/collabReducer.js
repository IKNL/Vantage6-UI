export default (state = [], action) => {

    switch(action.type){
        case 'FETCH_COLLABORATIONS':
            return action.payload;
        default:
            return state;
    }

};