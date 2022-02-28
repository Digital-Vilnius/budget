import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ConfirmCodeRequest, LoginRequest, RegisterRequest, Tokens } from '@api/clients/auth/types';
import { AuthClient } from '@api/clients';

export const loginAction = createAsyncThunk<void, LoginRequest>(
  'login',
  async (request: LoginRequest) => {
    await AuthClient.login(request);
  }
);

export const refreshTokenAction = createAsyncThunk<Tokens, Tokens>(
  'refreshToken',
  async (request: Tokens) => {
    const response = await AuthClient.refreshToken(request);
    return response.result;
  }
);

export const confirmCodeAction = createAsyncThunk<Tokens, ConfirmCodeRequest>(
  'confirmCode',
  async (request: ConfirmCodeRequest) => {
    const response = await AuthClient.confirmCode(request);
    return response.result;
  }
);

export const registerAction = createAsyncThunk<void, RegisterRequest>(
  'register',
  async (request: RegisterRequest) => {
    await AuthClient.register(request);
  }
);

export const logoutAction = createAction('logout');
