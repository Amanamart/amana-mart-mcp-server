import axios from 'axios';
import { config } from './config';

export const apiClient = axios.create({
  baseURL: config.apiUrl,
  timeout: 10000,
});

// Add interceptor to handle auth tokens if available
apiClient.interceptors.request.use((req) => {
  // Logic to inject token if stored/passed
  return req;
});
