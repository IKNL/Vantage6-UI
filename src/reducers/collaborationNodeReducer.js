export default (state = [], action) => {

    switch(action.type){
        case 'FETCH_COLLABORATION_NODES':
            return action.payload;
        default:
            return state;
    }

};