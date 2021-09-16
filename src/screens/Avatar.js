import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting</Text>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/images/a.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  text: {
    paddingRight: 60,
    fontSize: 25,
  },
});

export default Avatar;
