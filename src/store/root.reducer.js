import { combineReducers } from "@reduxjs/toolkit";
import presenceReducer from "./reducers/presence.reducer";
import itemSlice from "./slices/item.slice";
import connectionReducer from "./reducers/connection.reducer";

const rootReducer = combineReducers({
    presence: presenceReducer,
    items: itemSlice,
    login: connectionReducer
});

export default rootReducer;