import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: null,
    token: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
                token: action.idToken
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                user: null,
                token: null
            }
        default:
            return state;
    }
}

export default reducer;