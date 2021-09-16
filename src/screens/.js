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

const WeatheApp = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setLoading(true);
        const allData = res.data.list;
        setData(allData);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setErrorMessage(true);
        console.log(error, 'thismessage');
      });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('WeatherDetails', {
          item,
        })
      }>
      <View style={styles.main}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.main.temp}</Text>
        </View>
        <View>
          <Text style={styles.temp}>{item.main.humidity}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator color="gray" size="large" />
        <Text>Loading...s</Text>
      </View>
    );
  }
  if (errorMessage) {
    return (
      <View flex={1} alignItems="center" justifyContent="center">
        <Text>Something went wrong. Try Again</Text>
        {/* <Text onPress={getWeatherApi}>Click here to try again</Text> */}
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderBottomWidth: 1,
    padding: 15,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
  },
  loading: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
  temp: {
    fontSize: 25,
  },
});

export default WeatheApp;
