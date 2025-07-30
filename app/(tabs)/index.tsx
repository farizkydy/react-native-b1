import { JobCard } from '@/components/JobCard';
import { useJob } from '@/context/JobContext';
import { useRouter } from 'expo-router';
import { ActivityIndicator, FlatList, View } from 'react-native';

export default function HomeScreen() {
  const { jobs, loading } = useJob();
  const router = useRouter();

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard
            job={item}
            onPress={() => router.push(`/detail/${item.id}`)}
          />
        )}
      />
    </View>
  );
}
