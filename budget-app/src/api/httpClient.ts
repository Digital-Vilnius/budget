import axios from 'axios';
import { API_URL } from '@env';

const httpClient = axios.create({
  baseURL: API_URL,
});

httpClient.interceptors.response.use(async (response) => response.data);

export default httpClient;
