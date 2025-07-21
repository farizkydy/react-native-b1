import { Dimensions, Modal, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [age, setAge] = useState('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const validatePassword = (password: string) => {
    // Example validation: password must be at least 6 characters long
    if (password.length < 6) {
      setErrorPassword('Password must be at least 6 characters long');
    } else {
      setErrorPassword('')
    }
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <Text>Name: </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10 }}
          placeholder="Type your name"
          value={name}
          onChangeText={setName}
          autoCapitalize='none'
          />
        <Text style={{ margin: 10 }}>
          Hello, {name}!
        </Text>
        <Text>Age: </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10 }}
          placeholder="Type your age"
          value={age}
          onChangeText={setAge}
          keyboardType='numeric'
          />
        <Text>Password: </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10 }}
          placeholder="Type your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          />
          <Text style={{ color: 'red', margin: 10 }}>
            {errorPassword}
            </Text>
        <Text>Address</Text>
        <TextInput
          style={{ ...styles.multiline }}
          placeholder="Type your address"
          value={address}
          onChangeText={setAddress}
          multiline={true}
          numberOfLines={2}
          />
          <TouchableOpacity style={{ backgroundColor: 'red'}}>
            <Text style={{ color: 'black', margin: 10 }} onPress={() => setModalVisible(true)}>
              Show Modal
            </Text>
           
          </TouchableOpacity>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                  <Text style={{ marginBottom: 10 }}>This is a modal!</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={{ color: 'blue' }}>Close Modal</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          <Text>Terms & Condition</Text>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setTermsAccepted(!termsAccepted)}
          >
            <View style={[styles.checkbox, termsAccepted && styles.checkedChecbox]} />
            <Text>I agree to the terms and conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: 'yellow', padding: 10, margin: 10 }}
            onPress={() => validatePassword(password)}>
            <Text style={{ color: 'black' }}>Submit</Text>
            </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  box: {
    width: width * 0.6,
    height: Platform.OS === 'ios' ? height * 0.2 : height * 0.15,
    margin: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  checkbox: {
    alignSelf: 'center',
    margin: 10,
    height: 20,
    width: 20,
    borderColor: 'gray',
    borderWidth: 1
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  checkedChecbox: {
    backgroundColor: 'blue',
    alignSelf: 'center',
    margin: 10,
    height: 20,
    width: 20,
    borderColor: 'gray',
    borderWidth: 1
  }
})


 
