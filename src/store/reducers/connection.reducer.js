import { createReducer } from "@reduxjs/toolkit"
import { loginAction, logoutAction } from "../actions/connection.action"



const initialState = {
    user: null,
    isConnected: false,
    token: null
}

const connectionReducer = createReducer(initialState, (builder) => {
    builder.addCase(loginAction, (state, action) => {
        state.user = action.payload.name;
        state.token = "ddsd47s54d5s55s4d55sd5";
        state.isConnected = true;
    })
    .addCase(logoutAction, (state, action) => {
        state.user = null;
        state.token = null;
        state.isConnected = false;
    })
})

export default connectionReducer