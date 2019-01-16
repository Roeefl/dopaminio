import { combineReducers } from 'redux';

import { resourceReducer } from './resourceReducer';
import { selectedResourceReducer } from './selectedResourceReducer';
import { authReducer } from './authReducer';

export default combineReducers(
    {
        auth: authReducer,
        resources: resourceReducer,
        selectedResource: selectedResourceReducer
    }
);
