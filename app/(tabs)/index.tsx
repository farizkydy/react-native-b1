import { Button, Image, ScrollView, Text, View } from 'react-native';

import { Card } from '@/components/Card';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [count, setCount] = useState(10000000);
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
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ backgroundColor: Colors.light.background }}>
             <View style={{backgroundColor: 'blue', flex: 0.2 }}></View>
            <View style={{backgroundColor: 'red', flex: 0.4 }}></View>
            <View >
              <Text style={{fontSize: 30}}>Nomor sekarang: {count}</Text>
              <Button onPress={incrementCount} title='Increament' />
              <Text style={{fontSize: 30}}>Your Name: {name}</Text>
              <Button onPress={changeName} title='Change your name' />
            </View>
            <View>
              <Text>Alirkan data ke Children Component Card.tsx</Text>
              <Card title='Ini title dari parent' desciption='Ini desciption dari parent' />
            </View>
            <Text style={{ ...Colors.greenBold, fontWeight: 'bold', marginTop: 40 }}>
                Hallo world sdss
                <Text style={{color: 'red'}}>Ini berwarna merah</Text>
                <Text style={{fontSize: 14, fontWeight: 700}}>Ini font lebih tebal</Text>
                Balik lagi warna hitam
            </Text>
            <View>
              <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold'}}>
                Ini adalah text warna hijau
                </Text>
            </View>
            <View style={{backgroundColor: 'white', flex: 0.4 }}>
              <Image 
                source={require('@/assets/images/react-logo.png')}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
              />
              <Image 
                source={require('@/assets/images/icon-computer.svg')}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
              />
              <Image 
                source={{
                  uri: 'https://picsum.photos/id/237/200/300',
                }}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
              />
              <Image 
                source={require('@/assets/images/react-logo.png')}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
              />
              <Image 
                source={require('@/assets/images/icon-computer.svg')}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
              />
              <Image 
                source={{
                  uri: 'https://picsum.photos/id/237/200/300',
                }}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
              />
              <Image 
                source={require('@/assets/images/react-logo.png')}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
              />
              <Image 
                source={require('@/assets/images/icon-computer.svg')}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
              />
              <Image 
                source={{
                  uri: 'https://picsum.photos/id/237/200/300',
                }}
                style={{ width: 100, height: 100, alignSelf: 'center' }}
              />
            </View>
          </ScrollView>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


 
