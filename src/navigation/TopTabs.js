import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import LogIn from '../screens/Login';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LogIn} />
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
};

export default TopTabs;
