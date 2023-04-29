// import { configureStore, createStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import presenceReducer from './reducers/presence.reducer';
// import itemSlice from './slices/item.slice';

// const persistConfig = {
//     key: 'root',
//     storage,
//   }
// const store = configureStore({
//     presenceReducer,
//     // reducer : {
//     //     presence: presenceReducer,
//     //     item: itemSlice,

//     // },
//     devTools: import.meta.env.dev,

// });
// const persistedReducer = persistReducer(persistConfig, presenceReducer)

// let persistor = persistStore(store)

// export default { store, persistor }

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./root.reducer";
import { configureStore, createStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['items']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export default { store, persistor }

