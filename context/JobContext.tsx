import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchJobs } from '../api/jobApi';
import { Job } from '../types/job';

type JobContextType = {
  jobs: Job[];
  loading: boolean;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const getJobs = () => {
    fetchJobs().then(data => {
      setJobs(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getJobs()
  }, []);

  return (
    <JobContext.Provider value={{ jobs, loading }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => {
  const context = useContext(JobContext);
  if (!context) throw new Error('useJob must be used within a JobProvider');
  return context;
};
