import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {AddKost, HomeScreenMitra, Profile} from './pages';

const App = () => {
  return (
    // <NavigationContainer>
    // <Router />
    //   <FlashMessage position="top"/>
    // </NavigationContainer>
    // <HomeScreenMitra />
    //<AddKost/>
    <Profile />
  );
};

export default App;
