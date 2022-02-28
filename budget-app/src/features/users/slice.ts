import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersFilter } from '@api/clients/users/types';

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
    setFilter(state, action: PayloadAction<{ filter: UsersFilter }>) {
      state.filter = action.payload.filter;
    },
  },
});

export const { setFilter } = usersSlice.actions;
export const { reducer } = usersSlice;
