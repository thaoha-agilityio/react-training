import axios from 'axios';

const instance = axios.create({
  baseURL: `https://6385df7ebeaa6458266b766f.mockapi.io/books`,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

// Add a response interceptor
instance.interceptors.response.use((response) => response.data);

export default instance;
