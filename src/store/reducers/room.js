import * as actionTypes from '../actions/actionTypes';

const initialState = {
    rooms: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET_ROOMS:
            return {
                ...state,
                rooms: state.rooms.concat(action.value)
            }
        default:
            return state;
    }

}

export default reducer;