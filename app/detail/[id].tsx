import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { fetchJobById } from '../../api/jobApi';
import { Job } from '../../types/job';

export default function JobDetailPage() {
  const { id } = useLocalSearchParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (typeof id === 'string') {
      fetchJobById(id)
        .then(data => setJob(data))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  if (!job) return <Text style={styles.error}>Job not found.</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Button title="← Back" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>{job.jobName}ss</Text>
      <Text>Company: {job.company}</Text>
      <Text>Location: {job.location}</Text>
      <Text>Created At: {new Date(job.createdAt).toLocaleString()}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  error: { padding: 20, textAlign: 'center', color: 'red' },
});
