import {
    ROUTINE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    type: '',
    estStartTime: '',
    estEndTime: ''
};

export const routineFormReducer = (form = INITIAL_STATE, action) => {
    console.log(action);

    if (action.type === ROUTINE_UPDATE) {
        return {
            ...form,
            [action.payload.prop]: action.payload.value
        };
    }

    return form;
};
