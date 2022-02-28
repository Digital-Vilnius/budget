import {
  confirmCodeAction,
  loginAction,
  logoutAction,
  refreshTokenAction,
  registerAction,
} from '@features/auth/actions';
import { createSlice } from '@reduxjs/toolkit';

interface State {
  isLoading: boolean;
  isRefreshing: boolean;
  isLogged: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: State = {
  isLoading: false,
  isLogged: false,
  isRefreshing: false,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Pending
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(confirmCodeAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(refreshTokenAction.pending, (state) => {
      state.isRefreshing = true;
    });

    // Fulfilled
    builder.addCase(loginAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(registerAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(confirmCodeAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(refreshTokenAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });

    // Rejected
    builder.addCase(registerAction.rejected, () => initialState);
    builder.addCase(refreshTokenAction.rejected, () => initialState);
    builder.addCase(loginAction.rejected, () => initialState);
    builder.addCase(confirmCodeAction.rejected, () => initialState);

    // Others
    builder.addCase(logoutAction, () => initialState);
  },
});

export const { reducer } = authSlice;
