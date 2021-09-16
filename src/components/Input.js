import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SignIn = ({placeholder, value, onChangeText, iconName, mt = 20}) => {
  return (
    <View style={[styles.input1, {marginTop: mt}]}>
      {iconName && <Icon name={iconName} size={20} color="#FF6347" />}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{paddingLeft: 20}}
      />
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  input1: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
});
