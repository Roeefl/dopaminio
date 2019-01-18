import { combineReducers } from 'redux';

import { resourceReducer } from './resourceReducer';
import { selectedResourceReducer } from './selectedResourceReducer';
import { authReducer } from './authReducer';
import { routineFormReducer } from './routineFormReducer';

export default combineReducers(
    {
        auth: authReducer,
        resources: resourceReducer,
        selectedResource: selectedResourceReducer,
        routineForm: routineFormReducer
    }
);
