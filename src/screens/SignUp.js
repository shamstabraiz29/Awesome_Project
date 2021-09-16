import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import Button from '../components/button';
import Input from '../components/Input';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const values = {
      fullName,
      email,
      number,
      password,
    };
    navigation.navigate('UserData', {values});
  };

  return (
    <ScrollView>
      <Text style={styles.text}>Create New Account</Text>
      <Input
        placeholder="Full Name"
        onChangeText={val => setFullName(val)}
        value={fullName}
        iconName="user-circle"
      />
      <Input
        placeholder="Email"
        onChangeText={val => setEmail(val)}
        value={email}
        iconName="envelope"
      />
      <Input
        placeholder="Phone number"
        onChangeText={val => setNumber(val)}
        value={number}
        iconName="phone"
      />
      <Input
        placeholder="Password"
        onChangeText={val => setPassword(val)}
        value={password}
        iconName="eye-slash"
      />
      <Button
        text="Sign Up"
        onPress={handleSubmit}
        bgColor="#FF7F50"
        buttonIcon="check-circle-outline"
      />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center',
    color: '#FF6347',
  },
});
