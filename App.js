import React from 'react';

import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RoutineScreen from './src/screens/RoutineScreen';
import RoutineCreateScreen from './src/screens/RoutineCreateScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';

const STORE = createStore(
  reducers,
  {},
  applyMiddleware(ReduxThunk)
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Routines: {
      screen: RoutineScreen
    },
    RoutineCreate: {
      screen: RoutineCreateScreen
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EE1B24',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      }
    }
  }
);

// const TabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Routines: {
//     screen: RoutineScreen
//   }
// });

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  }
);

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={STORE}>
        <AppContainer />
      </Provider>
    );
  }
}
