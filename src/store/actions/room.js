import db from '../../firebase';
import * as actionTypes from './actionTypes';

export const setRooms = (rooms) => {
    return {
        type: actionTypes.SET_ROOMS,
        rooms: rooms
    }
}

// export const fetchRoomsFailed = () => {
//     return {
//         type: actionTypes.FETCH_ROOMS_FAILED
//     }
// }

export const initRooms = () => {
    return dispatch => {

        db.collection('rooms').onSnapshot(snaphot => (
            dispatch(setRooms(snaphot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))))
        ))
    }
};
