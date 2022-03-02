import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesFilter } from '@api/clients/categories/types';
import { setSelectedAccount } from '@features/accounts/slice';
import { logout } from '@features/auth/slice';

interface State {
  filter: CategoriesFilter;
}

const initialState: State = {
  filter: {},
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ filter: CategoriesFilter }>) => {
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

export const { setFilter } = categoriesSlice.actions;
export const { reducer } = categoriesSlice;
