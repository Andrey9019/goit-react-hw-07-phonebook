import { createSlice, nanoid } from '@reduxjs/toolkit';

const ContactSlice = createSlice({
  name: `contacts`,
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsRuduser = ContactSlice.reducer;
export const { addContact } = ContactSlice.actions;
export const { removeContact } = ContactSlice.actions;
export const getContacts = state => state.contacts.contacts;
