import axios, { AxiosRequestTransformer } from 'axios';

import { API_URL } from './config/app';
import { auth } from './services/firebase';

const appAxios = axios.create({
  baseURL: API_URL,
  transformRequest: [
    data => {
      if (data) {
        data.userId = auth.currentUser?.uid;
      }
      return data;
    },
    ...(axios.defaults.transformRequest as AxiosRequestTransformer[]),
  ],
});

appAxios.interceptors.request.use(
  async config => {
    const token = await auth.currentUser?.getIdToken(true);
    if (token && config.headers) {
      (config.headers as { Authorization: string }).Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default appAxios;
