import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountsFilter } from '@api/clients/accounts/types';
import { Account } from './types';

interface State {
  filter: AccountsFilter;
  selectedAccount: Account | null;
}

const initialState: State = {
  filter: {},
  selectedAccount: null,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<{ filter: AccountsFilter }>) {
      state.filter = action.payload.filter;
    },
    setSelectedAccount(state, action: PayloadAction<{ account: Account }>) {
      state.selectedAccount = action.payload.account;
    },
  },
});

export const { setFilter, setSelectedAccount } = accountsSlice.actions;
export const { reducer } = accountsSlice;
