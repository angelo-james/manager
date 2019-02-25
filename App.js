import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;