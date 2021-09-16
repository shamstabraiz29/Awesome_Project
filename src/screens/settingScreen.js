import React, {useState} from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingScreen = ({title, icon, switchh}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.main}>
          <Icon style={styles.icon} name={icon} />
        </View>
        <View style={{flex: 8, flexDirection: 'row'}}>
          <Text style={styles.title}>{title}</Text>
          {switchh && (
            <Switch
              style={styles.switch}
              trackColor={{false: '#767577', true: 'lightgray'}}
              thumbColor={isEnabled ? '#00BFFF' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  title: {
    fontSize: 20,
    paddingLeft: 10,
  },
  icon: {
    fontSize: 30,
    color: 'gray',
    textAlign: 'center',
  },
  switch: {
    flex: 1,
    alignSelf: 'flex-end',

    // alignItems: 'flex-end',
  },
  main: {
    flex: 1,
  },
});

export default SettingScreen;
