import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default axios.create({
  baseURL: 'http://943470f6d487.ngrok.io',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
