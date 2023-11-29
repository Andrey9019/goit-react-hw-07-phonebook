import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlerPending = state => {
  state.error = false;
  state.isLoading = true;
};

const handlerRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },

  extraReducers: {
    [fetchContacts.pending]: handlerPending,
    [fetchContacts.rejected]: handlerRejected,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.items = action.payload;
    },

    [addContact.pending]: handlerPending,
    [addContact.rejected]: handlerRejected,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.items.push(action.payload);
      console.log(action.payload);
    },

    [deleteContact.pending]: handlerPending,
    [deleteContact.rejected]: handlerRejected,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      const index = state.items.findIndex(({ id }) => id === action.payload.id);
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactSlice.reducer;
