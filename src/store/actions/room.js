import * as actionTypes from './actionTypes';

export const setRooms = (rooms) => {
    return {
        type: actionTypes.SET_ROOMS,
        value: rooms
    }
}