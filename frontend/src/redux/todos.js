import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
  },
  reducers: {
    read: (state, action) => {
      state.data = action.payload?.data;
    },
    create: (state, action) => {
      state.data.push(action.payload);
    },
    update: (state, action) => {
      const index = state.data.findIndex((el) => el.id === action.payload.id);
      state.data[index] = action.payload;
    },
    remove: (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload);
    },
  },
});

export const { read, create, update, remove } = todosSlice.actions;

export default todosSlice.reducer;
