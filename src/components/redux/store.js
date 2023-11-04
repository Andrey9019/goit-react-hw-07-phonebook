import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const localContacts = localStorage.getItem('contacts');

const initialState = {
  list: {
    a: 10,
    // contact: localStorage.setItem(`contacts`, JSON.stringify(localContacts)),
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case `phonebook/addcontact`:
      return {
        list: {
          a: sra,
        },
      };
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
