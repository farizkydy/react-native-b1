import { JobCard } from '@/components/JobCard';
import { useJob } from '@/context/JobContext';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const { jobs, loading } = useJob();

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  
  return (
    <View style={{ padding: 16 }}>
    <FlatList
      data={jobs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <JobCard job={item} />}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24 },
});
