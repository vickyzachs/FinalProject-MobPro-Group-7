import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {HomeScreen} from './pages';
import {store} from './redux';

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Router />
        <FlashMessage position="top" />
      </NavigationContainer> */}
      <HomeScreen />
    </Provider>
  );
};

export default App;
