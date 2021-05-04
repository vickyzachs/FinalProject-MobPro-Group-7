import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import {Modal} from './components';
import {Text, View} from 'react-native';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Router />
    // </NavigationContainer>
    <View>
      <Text>Halo</Text>
      <Text>Halo antares</Text>
      <Modal />
    </View>
  );
};

export default App;
