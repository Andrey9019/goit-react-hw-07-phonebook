import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: `filter`,
  initialState: {
    filter: ``,
    reducers: {
      filterValue(state, action) {
        state.filter = action.payloard;
      },
    },
  },
});
export const getFilter = state => state.filter;
export const filterReducer = filterSlice.reducer;
export const filterValue = filterSlice.actions;

console.log();
