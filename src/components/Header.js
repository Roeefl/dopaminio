import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
        color: '#fff'
    }
};

export default Header;
