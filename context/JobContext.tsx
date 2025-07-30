import React, { createContext, useContext, useEffect, useState } from 'react';
import { addJob as addJobApi, fetchJobs } from '../api/jobApi';
import { Job } from '../types/job';
import { useAuth } from './AuthContext';

type JobContextType = {
  jobs: Job[];
  loading: boolean;
  addJob: (job: Omit<Job, 'id' | 'createdAt'>) => Promise<void>;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const getJobs = async () => {
    try {
      if (!token) {
        setJobs([]);
        setLoading(false);
        return;
      }
      const data = await fetchJobs();
      setJobs(data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, [token]);

  const addJob = async (job: Omit<Job, 'id' | 'createdAt'>) => {
    if (!token) return;
    try {
      const newJob = await addJobApi(job);
      setJobs(prev => [...prev, newJob]);
    } catch (error) {
      console.error('Failed to add job:', error);
    }
  };

  // If no token, don't provide the JobContext
  if (!token) {
    return (
      <JobContext.Provider value={{ jobs: [], loading: false, addJob: async () => {} }}>
        {children}
      </JobContext.Provider>
    );
  }

  return (
    <JobContext.Provider value={{ jobs, loading, addJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => {
  const context = useContext(JobContext);
  if (!context) throw new Error('useJob must be used within a JobProvider');
  return context;
};
