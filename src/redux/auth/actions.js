import { FORGOT_PASSWORD, LOGIN, LOGOUT, RESET_MESSAGE, SIGNUP, UPDATE_PASSWORD } from './constants';

export function login(email, password) {
    return {
        type: LOGIN,
        payload: { email, password },
    };
}

export function signup(email, name, password) {
    return {
        type: SIGNUP,
        payload: { email, name, password },
    };
}
export function reset() {
    return {
        type: RESET_MESSAGE,
    };
}

export function updatePassword(email, otp, password) {
    return {
        type: UPDATE_PASSWORD,
        payload: { email, otp, password },
    };
}

export function forgotPassword(email) {
    return {
        type: FORGOT_PASSWORD,
        payload: { email },
    };
}

export function logout() {
    return {
        type: LOGOUT,
    };
}
