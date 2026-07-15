import React, { useReducer } from "react";

let initialState = {
  name: "",
  email: "",
  message: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload
      };

    case "email":
      return {
        ...state,
        email: action.payload
      };

    case "submit":
      return {
        ...state,
        message: "Form submitted successfully"
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function Formhandling() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "name",
            payload: e.target.value
          })
        }
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "email",
            payload: e.target.value
          })
        }
      />

      <br />
      <br />

      <button onClick={() => dispatch({ type: "submit" })}>
        SUBMIT
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        RESET
      </button>

      <h1>Name: {state.name}</h1>

      <h1>Email: {state.email}</h1>

      <h2>{state.message}</h2>
    </div>
  );
}

export default Formhandling;