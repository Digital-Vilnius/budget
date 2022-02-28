import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountsFilter } from '@api/clients/accounts/types';

interface State {
  filter: AccountsFilter;
}

const initialState: State = {
  filter: {},
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<{ filter: AccountsFilter }>) {
      state.filter = action.payload.filter;
    },
  },
});

export const { setFilter } = accountsSlice.actions;
export const { reducer } = accountsSlice;
