import * as actionTypes from './actionTypes';

import { auth, provider } from '../../firebase';

export const setUser = (user, token) => {
    return {
        type: actionTypes.SET_USER,
        user: user,
        idToken: token
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('user');
    return {
        type: actionTypes.USER_LOGOUT
    };
};

export const checkAuthTimeout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expiresIn * 1000);
    };
};

export const userSignin = () => {
    return dispatch => {
        auth.signInWithPopup(provider)
            .then(response => {
                console.log(response);
                const expiresIn = 3600
                const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)

                localStorage.setItem('token', response.credential.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('user', JSON.stringify(response.user));

                dispatch(setUser(response.user, response.credential.idToken));
                dispatch(checkAuthTimeout(expiresIn));
            })
            .catch(error => alert(error.message))
    }
};

//CHECKING SESSION
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            //getting string from localStorage & converted to date object
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const user = localStorage.getItem('user');
                dispatch(setUser(JSON.parse(user), token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};