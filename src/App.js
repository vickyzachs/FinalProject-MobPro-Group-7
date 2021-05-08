import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {store} from './redux';
import {AddKost, HomeScreen} from './pages';

const App = () => {
  return (
    <Provider store={store}>
      {/* <HomeScreen /> */}
      <AddKost />
    </Provider>
    //   <NavigationContainer>
    //     <Router />
    //     <FlashMessage position="top" />
    //   </NavigationContainer>
  );
};

export default App;
