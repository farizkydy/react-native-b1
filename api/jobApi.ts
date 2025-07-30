import axios from 'axios';
import { Job } from '../types/job';

const BASE_URL = 'https://63010185e71700618a32d3bb.mockapi.io/job';

export const fetchJobs = async (): Promise<Job[]> => {
  const res = await axios.get<Job[]>(BASE_URL);
  return res.data;
};

export const fetchJobById = async (id: string): Promise<Job> => {
  const res = await axios.get<Job>(`${BASE_URL}/${id}`);
  return res.data;
};

export const addJob = async (
  job: Omit<Job, 'id' | 'createdAt'>
): Promise<Job> => {
  const res = await axios.post<Job>(BASE_URL, job);
  return res.data;
};
