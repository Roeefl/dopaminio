import React from 'react';
import RoutineCreate from '../components/Routine/RoutineCreate';

class RoutineCreateScreen extends React.Component {
    static navigationOptions = {
        title: 'Create a new Routine'
    };

    render() {
        return (
            <RoutineCreate />
        );
    }
}

export default RoutineCreateScreen;
