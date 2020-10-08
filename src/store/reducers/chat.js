import * as actionTypes from '../actions/actionTypes';

const initialState = {
    messages: [],
    roomName: 'Select Room',
    roomImage: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            }
        case actionTypes.SET_ROOM_NAME:
            return {
                ...state,
                roomName: action.roomName
            }
        case actionTypes.SET_ROOM_IMAGE:
            const image = action.rooms.find(room => room.id === action.roomId).image
            return {
                ...state,
                roomImage: image
            }
        case actionTypes.USER_LOGOUT:
            return {
                ...state,
                roomName: 'Select Room',
                roomImage: null
            }
        default:
            return state;
    }
}

export default reducer;
