import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from '../components/button';

const LogIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Say Hello to your new App</Text>
      <Button
        text="Log In"
        onPress={() => navigation.navigate('SignIn')}
        bgColor="#FF6347"
        buttonIcon="account-circle"
      />
      <Button
        text="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        bgColor="#CD5C5C"
        buttonIcon="account-plus"
      />
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#FF6347',
    marginBottom: 60,
    textAlign: 'center',
  },
  container: {
    marginTop: 150,
  },
});
