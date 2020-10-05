import * as actionTypes from '../actions/actionTypes';

const initialState = {
    messages: [],
    roomName: 'Select room'
};

const reducer = (state = initialState, action) => {
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
