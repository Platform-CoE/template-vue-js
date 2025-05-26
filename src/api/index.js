import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 6000 * 10,
});

apiInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response ?? error)
);

export default apiInstance;
