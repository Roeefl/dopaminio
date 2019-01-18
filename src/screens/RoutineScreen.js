import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/common';

class RoutineScreen extends React.Component {
     static navigationOptions = ({ navigation }) => {
        return {
            title: 'Your Routines',
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('RoutineCreate')}
                    text="Add"
                />
            ),
        };
    }

    render() {
        return (
            <View>
                <Text>
                    A
                </Text>
                <Text>
                    B
                </Text>
            </View>
        );
    }
}

export default RoutineScreen;
