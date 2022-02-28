import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TransactionsFilter } from '@api/clients/transactions/types';

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
});

export const { setFilter } = transactionsSlice.actions;
export const { reducer } = transactionsSlice;
