import React, { useReducer } from "react";

let initialState = {
  cart: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        )
      };

    case "CLEAR":
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
}

function Shoppingcart() {
  let [state, dispatch] = useReducer(reducer, initialState);

  let laptop = {
    id: 101,
    name: "HP VICTUS"
  };

  let mobile = {
    id: 201,
    name: "iPhone"
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: laptop
          })
        }
      >
        Add Laptop
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: mobile
          })
        }
      >
        Add Mobile
      </button>

      <br />
      <br />

      <h2>Cart Items</h2>

      {state.cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE",
                payload: item.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <br />

      <button
        onClick={() =>
          dispatch({
            type: "CLEAR"
          })
        }
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Shoppingcart;