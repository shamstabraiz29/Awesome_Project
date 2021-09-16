import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const button = ({text, onPress, bgColor, buttonIcon}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, {backgroundColor: bgColor}]}>
          <Icon name={buttonIcon} size={30} color="white" />
          <Text style={styles.btntext}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View> 
  );
};

export default button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    paddingLeft: 5,
  },
  main: {
    padding: 10,
  },
});
