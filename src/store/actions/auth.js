import * as actionTypes from './actionTypes';

import { auth, provider } from '../../firebase';

export const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        user: user
    }
};

export const userSignin = () => {
    return dispatch => {
        auth.signInWithPopup(provider)
            .then(result => dispatch(setUser(result.user)))
            .catch(error => alert(error.message))
    }
};