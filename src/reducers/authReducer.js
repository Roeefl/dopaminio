import {
    LOGIN_EMAIL_CHANGE,
    LOGIN_PASSWORD_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
    email: ''
};

export const authReducer = (auth = INITIAL_STATE, action) => {
    if (action.type === LOGIN_EMAIL_CHANGE) {
        return action.payload;
    }

    return auth;
};
