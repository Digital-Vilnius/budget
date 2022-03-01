import axios from 'axios';
import { API_URL } from '@env';
import { store } from '@core/store';
import { logoutAction, refreshTokenAction } from '@features/auth/actions';

const httpClient = axios.create({
  baseURL: API_URL,
});

httpClient.interceptors.request.use(async (request) => {
  const accessToken = store.getState().auth.accessToken;

  if (accessToken && request.headers) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
});

httpClient.interceptors.response.use(
  async (response) => response.data,
  async (error) => {
    const { isRefreshing, refreshToken } = store.getState().auth;
    const { response, config } = error;
    const { status } = response;

    switch (status) {
      case 401: {
        if (!isRefreshing && refreshToken) {
          await store.dispatch(refreshTokenAction({ refreshToken })).unwrap();
          return httpClient(config);
        }

        store.dispatch(logoutAction());
        break;
      }
    }
  }
);

export default httpClient;
