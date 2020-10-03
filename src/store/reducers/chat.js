import * as actionTypes from '../actions/actionTypes';

const initialState = {
    messages: [],
    roomName: null
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        case actionTypes.SET_ROOM_NAME:
            return {
                ...state,
                roomName: action.roomName
            }
        default:
            return state;
    }
}

export default reducer;
