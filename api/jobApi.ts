import { Job } from '../types/job';

const BASE_URL = 'https://63010185e71700618a32d3bb.mockapi.io/job';

export const fetchJobs = async (): Promise<Job[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const fetchJobById = async (id: string): Promise<Job> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

