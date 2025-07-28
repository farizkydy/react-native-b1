import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Job } from '../types/job';

type Props = {
  job: Job;
};

export const JobCard: React.FC<Props> = ({ job }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{job.jobName}</Text>
    <Text>{job.company}</Text>
    <Text>{job.location}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
