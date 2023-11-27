// import { configureStore } from '@reduxjs/toolkit';
// import { contactsRuduser } from './contactsSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { filterReducer } from './filtersSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, contactsRuduser);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filtersSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice,
  },
});
