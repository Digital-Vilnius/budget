import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from './types';

interface State {
  selectedAccount: Account | null;
}

const initialState: State = {
  selectedAccount: null,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setSelectedAccount(state, action: PayloadAction<{ account: Account }>) {
      state.selectedAccount = action.payload.account;
    },
  },
});

export const { setSelectedAccount } = accountsSlice.actions;
export const { reducer } = accountsSlice;
