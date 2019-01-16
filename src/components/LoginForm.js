import React from 'react';
import Firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onLoginSuccess = () => {
        this.setState(
            {
                email: '',
                password: '',
                error: '',
                loading: false
            }
        );
    }

    onLoginFail = (error) => {
        this.setState(
            {
                error,
                loading: false
            }
        );
    }

    onLogin = async () => {
        this.setState(
            {
                error: '',
                loading: true
            }
        );

        console.log('onLogin');

        const { email, password } = this.state;

        try {
            const credential = await Firebase.auth().signInWithEmailAndPassword(email, password);
            
            if (credential) {
                console.log('default app user ->', credential.user.toJSON());
                this.onLoginSuccess();
            }
        } catch (error) {
            this.onLoginFail(error);

            // try {
            //     const reg = await Firebase.auth().createUserWithEmailAndPassword(email, password);

            //     if (reg) {
            //         console.log('default app user ->', reg.user.toJSON());
            //         this.onLoginSuccess();
            //     }
            // }
            // catch (err) {
            //     console.log(err);
            //     this.onLoginFail();
            // }
        }
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <Spinner size='small' />
            );
        }

        return (
            <Button
                text='Log In'
                onPress={this.onLogin}
            />
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='your-email@gmail.com'
                        value={this.state.email}
                        onChangeText={email => this.props.loginEmailChanged(email)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        placeholder='1337savage'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.pass.loginPasswordChanged(password)}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.error}>
                        {this.state.error}
                    </Text>
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    error: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

export default connect(null, actions)(LoginForm);
