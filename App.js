import React from 'react';
import Firebase from 'firebase';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import { StyleSheet, Text, View } from 'react-native';

import LoginForm from './src/components/LoginForm';
import { Button, Card, CardSection, Spinner } from './src/components/common';
import Header from './src/components/Header';
import ResourceList from './src/components/ResourceList';

// import HouseList from './src/components/HouseList';

const STORE = createStore(reducers);

export default class App extends React.Component {
  state = {
    loggedIn: null
  };

  componentDidMount() {
    this.initFirebase();
  }

  onLogout = () => {
    Firebase.auth().signOut();
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
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderLogin() {
    if (this.state.loggedIn) {
      return (
        <Card>
          <CardSection>
            <Button
              text='LogOut'
              onPress={this.onLogout}
            />
          </CardSection>
        </Card>
      );
    }

    if (this.state.loggedIn === false) {
      return (
        <LoginForm />
      );
    }

    return (
      <Spinner size='large' />
    );
  }

  render() {
    return (
      <Provider store={STORE}>
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>Welcome to Dopaminio</Text>
          </View>

          {this.renderLogin()}

          <Header title='Resources' />
          <ResourceList />

        </View>
      </Provider>
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
