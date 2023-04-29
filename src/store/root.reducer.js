import { combineReducers } from "@reduxjs/toolkit";
import presenceReducer from "./reducers/presence.reducer";
import itemSlice from "./slices/item.slice";

const rootReducer = combineReducers({
    presence: presenceReducer,
    items: itemSlice
});

export default rootReducer;