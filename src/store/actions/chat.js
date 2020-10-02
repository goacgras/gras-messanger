import db from '../../firebase';
import * as actionTypes from './actionTypes';
import firebase from 'firebase';

export const setMessages = (messages) => {
    return {
        type: actionTypes.SET_MESSAGES,
        messages: messages
    };
};

export const initMessages = (roomId) => {
    return dispatch => {
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot =>
                dispatch(setMessages(snapshot.docs.map(doc =>
                    doc.data()))
                )
            )
    }
};

// export const sendMessage = (roomId, input, user) => {
//     db.collection('rooms')
//         .doc(roomId)
//         .collection('messages')
//         .add({
//             message: input,
//             name: user,
//             timestamp: firebase.firestore.FieldValue.serverTimestamp()
//         })
// };
