import Firebase from 'firebase';
import {
    ROUTINE_UPDATE
} from './types';

export const routineUpdate = ({ prop, value }) => {
    console.log('routineUpdate:');
    console.log(prop);
    console.log(value);

    return {
        type: ROUTINE_UPDATE,
        payload: { prop, value }
    };
};

export const routineCreate = ({ name, type, estStartTime, estEndTime }) => {
    console.log(name, type, estStartTime, estEndTime);

    const { currentUser } = Firebase.auth();

    Firebase.database().ref(`/users/${currentUser.uid}/routines`)
        .push(
            {
                name,
                type,
                estStartTime,
                estEndTime
            }
        );
};
