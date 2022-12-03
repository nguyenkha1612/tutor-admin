import { call, put, takeEvery } from 'redux-saga/effects';
import {
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_SUCCESS,
    LOADING,
    LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGNUP,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_SUCCESS,
} from './constants';
import { forgotPasswordService, getUserService, loginService, signupService, updatePasswordService } from './services';

import RootNavigate from '~/utils/navigate';

function* loginSaga(action) {
    const { email, password } = action.payload;
    try {
        yield put({ type: LOADING });
        const response = yield call(loginService, email, password);
        console.log(response);
        if (response.status === 1) {
            localStorage.setItem('token', response.data);
            const user = yield call(getUserService);
            if (user.data) {
                const roles = user.data.roles?.map((item, i) => item.id);
                if (roles.includes('ADMIN')) {
                    yield put({ type: LOGIN_SUCCESS, payload: { user: user.data } });
                    return;
                }
            }
            yield put({ type: LOGIN_FAIL, payload: { error: 'Tài khoản không được phép đăng nhập' } });
        } else {
            yield put({ type: LOGIN_FAIL, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: LOGIN_FAIL, error });
    }
}

function* signupSaga(action) {
    const { email, name, password } = action.payload;
    console.log('signup: ', email, '|', name, '|', password);
    try {
        yield put({ type: LOADING });
        const response = yield call(signupService, { email, name, password });
        console.log(response);
        if (response.status === 1) {
            yield put({ type: SIGNUP_SUCCESS, payload: { message: response.message } });
        } else {
            yield put({ type: SIGNUP_ERROR, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: SIGNUP_ERROR, payload: { error: 'Vui lòng thử lại' } });
    }
}

function* updatePasswordSaga(action) {
    const { email, otp, password } = action.payload;
    try {
        yield put({ type: LOADING });
        const response = yield call(updatePasswordService, { email, otp, password });
        console.log(response);
        if (response.status === 1) {
            localStorage.setItem('token', response.data);

            const email = yield call(forgotPasswordService);
            yield put({ type: UPDATE_PASSWORD_SUCCESS, payload: { email: email.data } });
        } else {
            yield put({ type: UPDATE_PASSWORD_FAIL, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: UPDATE_PASSWORD_FAIL, payload: { error: 'Vui lòng thử lại' } });
    }
}
function* forgotPasswordSaga(action) {
    const { email } = action.payload;
    try {
        yield put({ type: LOADING });
        const response = yield call(forgotPasswordService, { email });
        console.log(response);
        if (response.status === 1) {
            yield put({ type: FORGOT_PASSWORD_SUCCESS, payload: { message: response.message } });
        } else {
            yield put({ type: FORGOT_PASSWORD_FAIL, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: FORGOT_PASSWORD_FAIL, payload: { error: 'Vui lòng thử lại' } });
    }
}

function* authSagas() {
    yield takeEvery(LOGIN, loginSaga);
    yield takeEvery(SIGNUP, signupSaga);
    yield takeEvery(UPDATE_PASSWORD, updatePasswordSaga);
    yield takeEvery(FORGOT_PASSWORD, forgotPasswordSaga);
}

export default authSagas;
