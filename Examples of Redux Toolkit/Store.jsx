import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./Reducer";

export let store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});