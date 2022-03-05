import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isOnboarded: boolean;
}

const initialState: State = {
  isOnboarded: false,
};

const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
    setIsOnboarded: (state, action: PayloadAction<{ isOnboarded: boolean }>) => {
      state.isOnboarded = action.payload.isOnboarded;
    },
  },
});

export const { setIsOnboarded } = setupSlice.actions;
export const { reducer } = setupSlice;
