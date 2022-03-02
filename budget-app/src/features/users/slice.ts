import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersFilter } from '@api/clients/users/types';
import { setSelectedAccount } from '@features/accounts/slice';
import { logout } from '@features/auth/slice';

interface State {
  filter: UsersFilter;
}

const initialState: State = {
  filter: {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ filter: UsersFilter }>) => {
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

export const { setFilter } = usersSlice.actions;
export const { reducer } = usersSlice;
