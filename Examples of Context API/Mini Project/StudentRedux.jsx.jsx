import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const studentSlice = createSlice({
  name: "students",

  initialState: {
    count: 0,
  },

  reducers: {
    addStudent: (state) => {
      state.count++;
    },
  },
});

const store = configureStore({
  reducer: {
    students: studentSlice.reducer,
  },
});

function StudentCounter() {
  const count = useSelector((state) => state.students.count);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Total Students : {count}</h2>

      <button
        onClick={() => dispatch(studentSlice.actions.addStudent())}
      >
        Add Student
      </button>
    </>
  );
}

export default function ReduxComponent() {
  return (
    <Provider store={store}>
      <StudentCounter />
    </Provider>
  );
}