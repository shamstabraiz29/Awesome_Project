import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogIn from '../screens/Login';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import UserData from '../screens/UserData';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 2,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Login"
        component={LogIn}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.main}>
              <Icon
                name="user-circle"
                size={20}
                style={{color: focused ? 'red' : 'gray', fontSize: 20}}
              />
              <Text style={{color: focused ? 'red' : 'gray', fontSize: 12}}>
                Login
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.main}>
              <Icon
                name="user-circle"
                size={20}
                style={{color: focused ? 'red' : 'gray', fontSize: 20}}
              />
              <Text style={{color: focused ? 'red' : 'gray', fontSize: 12}}>
                SignIn
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.main}>
              <Icon
                name="portrait"
                size={20}
                style={{color: focused ? 'red' : 'gray', fontSize: 20}}
              />
              <Text style={{color: focused ? 'red' : 'gray', fontSize: 12}}>
                SignUp
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UserData"
        component={UserData}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.main}>
              <Icon
                name="suitcase"
                size={20}
                style={{color: focused ? 'red' : 'gray', fontSize: 20}}
              />
              <Text style={{color: focused ? 'red' : 'gray', fontSize: 12}}>
                UserData
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 3.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
});

export default Tabs;
