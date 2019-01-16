import {
    SELECT_RESOURCE,
    LOGIN_EMAIL_CHANGE,
    LOGIN_PASSWORD_CHANGE
} from './types';

export const selectResource = (resourceId) => {
    return {
        type: SELECT_RESOURCE,
        payload: resourceId
    };
};

export const loginEmailChanged = (email) => {
    return {
        type: LOGIN_EMAIL_CHANGE,
        payload: email
    };
};

export const loginPasswordChanged = (password) => {
    return {
        type: LOGIN_PASSWORD_CHANGE,
        payload: password
    };
};
