import React, { useReducer } from "react";

let initialState = {
  name: "",
  students: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
      
      case "ADD_STUDENT":
        if (state.name.trim() === "") {
          return state;
        }
        
        return {
          ...state,
          students: [
          ...state.students,
          {
            id: Date.now(),
            name: state.name,
          },
        ],
        name: "",
      };

    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

function StudentManagement() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Student Management</h1>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "SET_NAME",
            payload: e.target.value,
          })
        }
      />

      <button
        onClick={() =>
          dispatch({
            type: "ADD_STUDENT",
          })
        }
      >
        Add Student
      </button>

      <hr />

      {state.students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_STUDENT",
                payload: student.id,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentManagement;