import React from 'react';
import Firebase from 'firebase';
import { connect } from 'react-redux';

import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as actions from '../actions';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);

        this.initFirebase();
    }

    onAuthChange = (user) => {
        if (user) {
            this.props.onAuthStateChange(user);
            this.props.navigation.navigate('App');
        } else {
            this.props.onAuthStateChange(false);
            this.props.navigation.navigate('Auth');
        }
    }

    initFirebase = () => {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyA-JiSkMNCfVniFeSQqx8lV0iWNrj5Cuys',
            authDomain: 'dopaminio.firebaseapp.com',
            databaseURL: 'https://dopaminio.firebaseio.com',
            projectId: 'dopaminio',
            storageBucket: 'dopaminio.appspot.com',
            messagingSenderId: '977578351210'
        };

        Firebase.initializeApp(config);
        console.log('Firebase init');

        Firebase.auth().onAuthStateChanged(user => {
            this.onAuthChange(user);
        });
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#414141',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      padding: 10,
      color: '#fff'
    }
  });


export default connect(
    null,
    actions
)(AuthLoadingScreen);
  
