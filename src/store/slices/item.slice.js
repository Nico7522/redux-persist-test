import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  items: [],
};
const itemSlice = createSlice({
  initialState,
  name: "item",
  reducers: {
    add: {
      prepare: ({ name, price }) => {
        return {
          payload: {
            id: nanoid(),
            name,
            price,
            isValided: false,
          },
        };
      },
      reducer: (state, action) => {
        const item = action.payload;
        state.items.push(item);
      },
    },

    remove(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((i) => i !== targetId);
    },

    validate(state, action) {
      const itemId = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      item ? (item.isValided = true) : (item.isValided = false);
    },
  },
});
export const {
   add: itemActionAdd,
   remove: itemActionRemove,
   validate: itemActionValidate,
} = itemSlice.actions;

export default itemSlice.reducer;
