import React from 'react';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import { Platform, UIManager, Text, View, LayoutAnimation } from 'react-native';
import { Card, CardSection, Button } from './common/';
import * as actions from '../actions';

class Resource extends React.Component {
    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        console.log('about to update');
        LayoutAnimation.spring();
    }

    renderExpand() {
        const { selected, resource } = this.props;
        
        if (selected) {
            return (
                <Text>
                    {resource.desc}
                </Text>
            );
        }
    }

    render() {
        const { resource } = this.props;

        return (
            <Card>
                <CardSection>
                    <View style={styles.headerContent}>
                        <Text style={styles.label}>
                            {resource.label}
                        </Text>
                        <Text>
                            {resource.progress * 100} / 100
                        </Text>
                    </View>
                    <View style={styles.barContainer}>
                        <Progress.Bar
                            progress={resource.progress}
                            color={resource.color}
                            width={300}
                            height={8}
                        />
                    </View>
                </CardSection>

                <CardSection>
                    <Button
                        text='select resource'
                        onPress={() => this.props.selectResource(resource.id)}
                    />
                </CardSection>

                <CardSection>
                    {this.renderExpand()}
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
    label: {
        fontSize: 18
    },
    barContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};


const mapStateToProps = (state, ownProps) => {
    // console.log(state.selectedResource);
    const selected = (state.selectedResource === ownProps.resource.id);
    return { selected };
};

export default connect(mapStateToProps, actions)(Resource);
