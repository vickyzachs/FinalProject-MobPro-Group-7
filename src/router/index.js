import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  HomeScreen,
  HomeScreenMitra,
  Profile,
  SignIn,
  SignUp,
  SplashScreen,
} from '../pages';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const globalState = useSelector(state => state);
  return (
    <Tab.Navigator>
      {globalState.role === 1 ? (
        <Tab.Screen
          name="HomeScreenMitra"
          component={HomeScreenMitra}
          options={{tabBarLabel: 'Home'}}
        />
      ) : (
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{tabBarLabel: 'Home'}}
        />
      )}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Router = () => {
  const globalState = useSelector(state => state);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
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
      {globalState.role === 1 ? (
        <Stack.Screen
          name="HomeScreenMitra"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="HomeScreen"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default Router;
