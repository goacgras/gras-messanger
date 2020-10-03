import * as actionTypes from '../actions/actionTypes';

const initialState = {
    rooms: []
}

// rooms: state.rooms.concat(action.rooms)

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type){
        case actionTypes.SET_ROOMS:
            return {
                ...state,
                rooms: action.rooms
            }
        default:
            return state;
    }

}

export default reducer;