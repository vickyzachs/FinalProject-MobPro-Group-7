import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
<<<<<<< HEAD
import {SignUp, SignIn, HomeScreen, Profile, SplashScreen} from '../pages';
// import {SignUp, SignIn, HomeScreen, SplashScreen} from '../pages';
=======

import {SignUp, SignIn, HomeScreen, SplashScreen,Profile} from '../pages';
>>>>>>> 9f649ca01d37fa20f015c64097a5c0bbf5f20b9b

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
<<<<<<< HEAD
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="SplashScreen"
      component={SplashScreen} 
      options={{headerShown:false}}
=======
      name="SplashScreen"
      component={SplashScreen} 
      options={{headerShown:false}}
      />
    <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}

>>>>>>> 9f649ca01d37fa20f015c64097a5c0bbf5f20b9b
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />      
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
