import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountScreen, DateScreen, HomeScreen, SplashScreen} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stays" component={DateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default Router;
