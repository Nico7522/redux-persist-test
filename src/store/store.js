// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
// import rootReducer from "./root.reducer";
// import { configureStore, createStore } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// const persistConfig = {
//   key: "root",
//   storage,
//   // stateReconcilier: hardSet,
//   whitelist: ['login'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// let store = createStore(persistedReducer);
// let persistor = persistStore(store);

// export default { store, persistor }


import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import rootReducer from "./root.reducer";
import { configureStore, createStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const persistConfig = {
  key: "root",
  storage,
  // stateReconcilier: hardSet,
  // blacklist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.dev, 

})

export const persistor = persistStore(store)

