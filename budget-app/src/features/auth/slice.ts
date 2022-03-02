import { logoutAction, refreshTokenAction } from '@features/auth/actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse } from '@api/clients/auth/types';

interface State {
  isRefreshing: boolean;
  isLogged: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  userId: number | null;
}

const initialState: State = {
  isLogged: false,
  isRefreshing: false,
  accessToken: null,
  refreshToken: null,
  userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthResponse>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userId = action.payload.userId;
      state.isLogged = true;
    },
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(refreshTokenAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshTokenAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(refreshTokenAction.rejected, () => initialState);
    builder.addCase(logoutAction, () => initialState);
  },
});

export const { setAuth, logout } = authSlice.actions;
export const { reducer } = authSlice;
