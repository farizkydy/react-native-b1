// components/JobCard.tsx
import { Job } from '@/types/job';
import { Pressable, StyleSheet, Text } from 'react-native';

export const JobCard = ({ job, onPress }: { job: Job; onPress: () => void }) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{job.jobName}</Text>
      <Text>{job.company}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontWeight: 'bold', fontSize: 16 },
});
