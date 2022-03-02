import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TransactionsFilter } from '@api/clients/transactions/types';
import { setSelectedAccount } from '@features/accounts/slice';
import { logout } from '@features/auth/slice';

interface State {
  filter: TransactionsFilter;
}

const initialState: State = {
  filter: {},
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<{ filter: TransactionsFilter }>) {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setSelectedAccount, (state, payload) => {
      state.filter.accountId = payload.payload.account.id;
    });
    builder.addCase(logout, () => initialState);
  },
});

export const { setFilter } = transactionsSlice.actions;
export const { reducer } = transactionsSlice;
