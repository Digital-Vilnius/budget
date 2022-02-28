import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesFilter } from '@api/clients/categories/types';

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
    setFilter(state, action: PayloadAction<{ filter: CategoriesFilter }>) {
      state.filter = action.payload.filter;
    },
  },
});

export const { setFilter } = categoriesSlice.actions;
export const { reducer } = categoriesSlice;
