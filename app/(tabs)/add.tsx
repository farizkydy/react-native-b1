'use client';

import { useJob } from '@/context/JobContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddJobScreen() {
  const { addJob } = useJob();
  const router = useRouter();

  const [jobName, setJobName] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    if (!jobName || !company) {
      Alert.alert('Please fill all fields');
      return;
    }

    addJob({
      jobName, company, location
    });
    router.back(); // atau router.push('/')
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Job Name"
        value={jobName}
        onChangeText={setJobName}
        style={styles.input}
        autoCorrect={false}
      />
      <TextInput
        placeholder="Company"
        value={company}
        onChangeText={setCompany}
        style={styles.input}
        autoCorrect={false}
      />
       <TextInput
        placeholder="location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
        autoCorrect={false}
      />
      <Button title="Add Job" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
  },
});
