import React from 'react';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Text, Picker, TouchableOpacity } from 'react-native';
import { Button, Card, CardSection, Input } from '../common';
import { routineCreate, routineUpdate } from '../../actions';

class RoutineCreate extends React.Component {
    state = {
        isStartDateTimePickerVisible: false,
        isEndDateTimePickerVisible: false
    };

    onCreatePress = () => {
        const { name, type, estStartTime, estEndTime } = this.props;

        this.props.routineCreate(
            {
                name: name || 'A random task',
                type: type || 'Time Waster',
                estStartTime,
                estEndTime
            }
        );
    }
    
    _showStartDateTimePicker = () => {
        this.setState({ isStartDateTimePickerVisible: true });
    }
    _hideStartDateTimePicker = () => {
        this.setState({ isStartDateTimePickerVisible: false });
    }
    _handleStartDatePicked = (date) => {
        console.log(`A start date has been picked: ${date.toLocaleTimeString()}`);
        this.props.routineUpdate({ prop: 'estStartTime', value: date.toLocaleTimeString() });
        this._hideStartDateTimePicker();
    };
   
    _showEndDateTimePicker = () => {
        this.setState({ isEndDateTimePickerVisible: true });
    }
    _hideEndDateTimePicker = () => {
        this.setState({ isEndDateTimePickerVisible: false });
    }

    _handleEndDatePicked = (date) => {
      console.log('An end date has been picked: ', date.toLocaleTimeString());
      this.props.routineUpdate({ prop: 'estEndTime', value: date.toLocaleTimeString() });
      this._hideEndDateTimePicker();
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Office'
                        value={this.props.name}
                        onChangeText={value => this.props.routineUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabel}>
                        Routine Type
                    </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.props.type}
                        onValueChange={value => this.props.routineUpdate({ prop: 'type', value })}
                    >
                        <Picker.Item value='Work' label='Work' />
                        <Picker.Item value='Meal' label='Meal' />
                        <Picker.Item value='Sports' label='Sports' />
                    </Picker>
                </CardSection>

                <CardSection>
                    <TouchableOpacity onPress={this._showStartDateTimePicker}>
                        <Text>
                            Estimated Start Time
                        </Text>
                    </TouchableOpacity>

                    <Text>
                        {this.props.estStartTime}
                    </Text>

                    <DateTimePicker
                        mode='time'
                        isVisible={this.state.isStartDateTimePickerVisible}
                        onConfirm={this._handleStartDatePicked}
                        onCancel={this._hideStartDateTimePicker}
                    />
                </CardSection>

                <CardSection>
                    <TouchableOpacity onPress={this._showEndDateTimePicker}>
                        <Text>
                            Estimated End Time
                        </Text>
                    </TouchableOpacity>

                    <Text>
                        {this.props.estEndTime}
                    </Text>

                    <DateTimePicker
                        mode='time'
                        isVisible={this.state.isEndDateTimePickerVisible}
                        onConfirm={this._handleEndDatePicked}
                        onCancel={this._hideEndDateTimePicker}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        text='Create'
                        onPress={this.onCreatePress}
                    />
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerLabel: {
        fontSize: 18,
        paddingLeft: 20
    },
    picker: {
        flex: 1
    }
};

const mapStateToProps = (state) => {
    return (
        {
            name: state.routineForm.name,
            type: state.routineForm.type,
            estStartTime: state.routineForm.estStartTime,
            estEndTime: state.routineForm.estEndTime
        }
    );
};

export default connect(
    mapStateToProps,
    { routineCreate, routineUpdate }
)(RoutineCreate);
