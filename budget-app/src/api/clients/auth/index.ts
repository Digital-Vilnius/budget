import { ResultResponse } from '@api/types';
import httpClient from '@api/httpClient';
import {
  AuthResponse,
  ConfirmCodeRequest,
  LoginRequest,
  RefreshTokenRequest,
  RegisterRequest,
} from './types';

const baseUrl = '/auth';

export const login = async (request: LoginRequest) => {
  const url = `${baseUrl}/login`;
  return httpClient.post<LoginRequest, void>(url, request);
};

export const register = async (request: RegisterRequest) => {
  const url = `${baseUrl}/register`;
  return httpClient.post<RegisterRequest, void>(url, request);
};

export const refreshToken = async (request: RefreshTokenRequest) => {
  const url = `${baseUrl}/refresh-token`;
  return httpClient.post<RefreshTokenRequest, ResultResponse<AuthResponse>>(url, request);
};

export const confirmCode = async (request: ConfirmCodeRequest) => {
  const url = `${baseUrl}/confirm-code`;
  return httpClient.post<ConfirmCodeRequest, ResultResponse<AuthResponse>>(url, request);
};
