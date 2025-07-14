import { Button, Dimensions, Platform, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState<string>('John Doe');
  const incrementCount = () => {
    setCount(count + 1);
  }
  const changeName = () => {
    setName('Fariz Rizky')
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Flex Direction</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>Test 1</Text>
          <Text>Test 2</Text>
        </View>
        <Text  style={{fontSize: 20, fontWeight: 'bold'}}>Justify Content</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Test 1</Text>
          <Text>Test 2</Text>
          <Text>Test 3</Text>
        </View>
        <Text  style={{fontSize: 20, fontWeight: 'bold'}}>Align Items</Text>
        <View style={{alignItems: 'center'}}>
          <Text>Test 1</Text>
          <Text>Test 2</Text>
          <Text>Test 3</Text>
        </View>
        <Text  style={{fontSize: 20, fontWeight: 'bold'}}>Flex</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
          <Text>Test 1</Text>
        </View>
        <Text  style={{fontSize: 20, fontWeight: 'bold'}}>Box</Text>
        <View style={styles.container}>
          <View style={[styles.box, { backgroundColor:  count > 5 ? 'yellow' : 'red'}]}/>
          <View style={[styles.box, { backgroundColor: Platform.OS === 'ios' ? 'blue' : 'black'}]}/>
          <View style={[styles.box, { backgroundColor: 'green'}]}/>
        </View>
        <Text  style={{fontSize: 20, fontWeight: 'bold'}}>Conditional Styling</Text>
        <View>
          <Button title="Increment Count" onPress={incrementCount} />
          <Text style={{color: count > 10 ? 'green' : 'red'}}>
            Count is {count}
          </Text>
          <Text style={{color: name === 'Fariz Rizky' ? 'blue' : 'black'}}>
            Name is {name}
          </Text>
        </View>
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
  }
})


 
