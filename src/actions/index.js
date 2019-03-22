
export const isLoading = () => {
    return {
    type: 'IS_LOADING',
    }
}


export const getUserData = data => {
    return {
    type: 'GET_USER_DATA',
    payload: data
    }
}

export const isFailure = err => {
    return {
    type: 'IS_LOADING',
    payload: err
    }
}

