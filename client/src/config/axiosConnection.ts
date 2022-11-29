import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3500',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    token: localStorage.getItem('token'),
  },
});