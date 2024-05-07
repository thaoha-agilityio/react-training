import axios from 'axios';

// Constants
import { API_BASE_URL } from '@/constants';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

  return config;
});

export default instance;
