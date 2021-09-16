import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WeatherDetails = ({route}) => {
  const data = route.params.item;
  console.log(data);

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.body}>{data.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
  body: {
    fontSize: 15,
  },
  title: {
    fontSize: 20,
  },
});

export default WeatherDetails;
