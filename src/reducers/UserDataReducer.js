

const intialState = {
    
}

export const UserData = (state = intialState, action ) => {

    switch (action.type) {
        case 'GET_USER_DATA':
            return Object.assign({...state, data: action.payload.data })

        default:
            return state;
    }
}