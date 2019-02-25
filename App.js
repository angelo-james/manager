import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA8QJ1Lzfa_4AnJ0S_t8am5U_uoHAdaN18',
      authDomain: 'manager-a2121.firebaseapp.com',
      databaseURL: 'https://manager-a2121.firebaseio.com',
      projectId: 'manager-a2121',
      storageBucket: 'manager-a2121.appspot.com',
      messagingSenderId: '889970175203'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;