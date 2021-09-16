import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {MySafeAreaView} from '../components/safeArea';
import {settingsData} from './fakeJson';
import SettingScreen from './settingScreen';
const UserData = () => {
  return (
    <MySafeAreaView>
      <View>
        <FlatList
          data={settingsData}
          renderItem={({item, index}) => {
            console.log({item});
            return (
              <SettingScreen
                title={item.title}
                icon={item.iconName}
                switchh={item.switch}
              />
            );
          }}
        />
        <Text style={styles.text}>Switch to Provider</Text>
        <Text style={styles.text}>Logout</Text>
      </View>
    </MySafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#00BFFF',
    padding: 22,
    paddingVertical: 15,
    fontSize: 20,
  },
});

export default UserData;
