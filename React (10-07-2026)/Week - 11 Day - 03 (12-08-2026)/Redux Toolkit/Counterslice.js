import { createSlice } from "@reduxjs/toolkit"

let Counterslice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value++;
    },

    decrement: (state) => {
      state.value--;
    }
  }
})

export let { increment, decrement } = Counterslice.actions

export default Counterslice.reducer