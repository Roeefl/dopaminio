import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class House extends React.Component {
    render() {
        const { name, region, words, founded } = this.props.house;

        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainer}>
                        <Image
                            source={require('../img/stark.png')}
                            style={styles.thumbnail}
                        />
                    </View>
                    <View style={styles.headerContent}>
                        <Text style={styles.name}>
                            {name}
                        </Text>
                        <Text>
                            {region}
                        </Text>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    name: {
        fontSize: 18
    },
    thumbnail: {
        height: 100,
        width: 100
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default House;
