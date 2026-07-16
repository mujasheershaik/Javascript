import React, { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    default:
      return state;
  }
}

export default function AttendanceReducer() {
  const [attendance, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState("");

  function addAttendance() {
    if (name === "") return;

    dispatch({
      type: "ADD",
      payload: name,
    });

    setName("");
  }

  return (
    <>
      <h2>Attendance</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
      />

      <button onClick={addAttendance}>
        Mark Present
      </button>

      {attendance.map((student, index) => (
        <h4 key={index}>{student}</h4>
      ))}
    </>
  );
}