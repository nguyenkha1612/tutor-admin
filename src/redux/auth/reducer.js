import {
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_SUCCESS,
    LOADING,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    RESET_MESSAGE,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    UPDATE_PASSWORD,
} from './constants';

const initialState = {
    user: null,
    token: null,
    loading: false,
    message: null,
    error: null,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload.user, message: null, error: null };
        case LOADING:
            return { ...state, loading: true, error: null, message: null };
        case LOGIN_FAIL:
            return { ...state, loading: false, user: null, error: action.payload.error, message: null };
        case LOGOUT:
            localStorage.removeItem('token');
            return { ...state, loading: false, user: null };
        case SIGNUP_SUCCESS:
            return { ...state, loading: false, message: action.payload.message, error: null };
        case SIGNUP_ERROR:
            return { ...state, loading: false, error: action.payload.error, message: null };
        case RESET_MESSAGE:
            return { ...state, loading: false, error: null, message: null };
        case UPDATE_PASSWORD:
            return { ...state, loading: false, error: null, message: null };
        case FORGOT_PASSWORD:
            return { ...state, loading: false, error: null, message: null };
        case FORGOT_PASSWORD_SUCCESS:
            return { ...state, loading: false, message: action.payload.message, error: null };
        case FORGOT_PASSWORD_FAIL:
            return { ...state, loading: false, error: action.payload.error, message: null };
        default:
            return state;
    }
}

export default authReducer;
