import React from 'react';
import LogIn from '../screens/Login';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import UserData from '../screens/UserData';
import {createStackNavigator} from '@react-navigation/stack';
import Avatar from '../screens/Avatar';
import WeatherApp from '../screens/WeatherApp';
import WeatherDetails from '../screens/WeatherDetails';

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="WeatherApp" component={WeatherApp} />
      <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
      <Stack.Screen
        name="UserData"
        component={UserData}
        options={{
          headerTitle: props => <Avatar {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacks;
