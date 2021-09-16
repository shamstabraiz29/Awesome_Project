import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';

const WeatherApp = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setLoading(true);
        const allData = res.data;
        setData(allData);
      })
      .catch(error => {
        setLoading(true);
        setErrorMessage(true);
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('WeatherDetails', {
          item,
        })
      }>
      <View style={styles.title}>
        <Text style={styles.heading}>Title</Text>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  if (!loading) {
    return (
      <View style={styles.main}>
        <ActivityIndicator color="gray" size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }
  if (errorMessage) {
    return (
      <View style={styles.main}>
        <Text>Something went wrong. Try Again</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  heading: {
    fontSize: 20,
  },
  text: {
    fontSize: 15,
  },
});

export default WeatherApp;
