import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponse, RefreshTokenRequest } from '@api/clients/auth/types';
import { AuthClient } from '@api/clients';

export const refreshTokenAction = createAsyncThunk<AuthResponse, RefreshTokenRequest>(
  'refreshToken',
  async (request: RefreshTokenRequest) => {
    const response = await AuthClient.refreshToken(request);
    return response.result;
  }
);

export const logoutAction = createAction('logout');
