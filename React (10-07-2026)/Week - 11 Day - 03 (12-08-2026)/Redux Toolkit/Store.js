import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./Counterslice"

let Store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default Store