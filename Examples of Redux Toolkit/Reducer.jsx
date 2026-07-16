import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
  name: "todo",

  initialState: {
    todos: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },
  },
});

export default slice.reducer;

export const { addTodo, deleteTodo } = slice.actions;