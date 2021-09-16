import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import LogIn from '../screens/Login';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Darwer = createDrawerNavigator();

const Drawer = () => {
  return (
    <Darwer.Navigator>
      <Darwer.Screen name="Login" component={LogIn} />
      <Darwer.Screen name="SignIn" component={SignIn} />
      <Darwer.Screen name="SignUp" component={SignUp} />
    </Darwer.Navigator>
  );
};

export default Drawer;
