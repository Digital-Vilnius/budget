import { ResultResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { ConfirmCodeRequest, LoginRequest, RefreshToken, RegisterRequest, Tokens } from './types';

const baseUrl = '/auth';

export const login = async (request: LoginRequest) => {
  const url = `${baseUrl}/login`;
  return httpClient.post<LoginRequest, void>(url, request);
};

export const register = async (request: RegisterRequest) => {
  const url = `${baseUrl}/register`;
  return httpClient.post<RegisterRequest, void>(url, request);
};

export const refreshToken = async (request: RefreshToken) => {
  const url = `${baseUrl}/refresh-token`;
  return httpClient.post<RefreshToken, ResultResponse<Tokens>>(url, request);
};

export const confirmCode = async (request: ConfirmCodeRequest) => {
  const url = `${baseUrl}/confirm-code`;
  return httpClient.post<ConfirmCodeRequest, ResultResponse<Tokens>>(url, request);
};
