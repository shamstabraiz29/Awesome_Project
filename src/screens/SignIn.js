import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Button from '../components/button';
import Input from '../components/Input';

const SignIn = ({navigation}) => {
  const [userName, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text style={styles.heading}>Sign In </Text>
      <Input
        placeholder="User Name"
        onChangeText={val => setEmail(val)}
        value={userName}
        iconName="user-circle"
      />
      <Input
        placeholder="Password"
        onChangeText={val => setPassword(val)}
        value={password}
        iconName="eye-slash"
      />

      <Button
        text="Log In"
        onPress={() => setModalVisible(true)}
        bgColor="#FF6347"
        buttonIcon="account-check"
      />
      <Button
        text="Weather App"
        bgColor="#4169E1"
        buttonIcon="cloud"
        onPress={() => navigation.navigate('WeatherApp')}
      />

      <View style={styles.centeredView}>
        <Modal
          animationType="slideI"
          transparent={false}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {userName} Wellcome to New App
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center',
    color: '#FF6347',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#FF6347',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
});
