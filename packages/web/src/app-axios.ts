import axios from 'axios';
import { API_URL } from './config/app';

const appAxios = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: 'mytoken',
  },
});

export default appAxios;
