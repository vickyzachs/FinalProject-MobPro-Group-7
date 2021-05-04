import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import { SignIn } from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
    
  );
};

export default App;


