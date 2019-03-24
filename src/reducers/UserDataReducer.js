

export const UserData = (state = {}, action ) => {

    

    switch (action.type) {
        case 'GET_USER_DATA':
            return Object.assign({ ...state, data: action.payload })
    
        
        case 'USER_DATA_FILTER':
        let payload = action.payload;
            let newState = Object.assign({
                ...state, data: state.data.filter(user => {
                    return ((user.id === payload.isUserId));
                })});
            // let filterdState = newState.filter(user => ((user.id === payload.isUserId) && (user.first_name === payload.first_name)));
            return newState; 
        
        case 'USER_DATA_RESET':
            return 
        default:
            return state;
    }
}