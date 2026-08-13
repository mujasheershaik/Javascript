import React, { useReducer } from "react"

function reducer(state, action) {
  if (action.type === "ADD") {
    return { count: state.count + 1 }
  }

  if (action.type === "REMOVE") {
    return { count: state.count - 1 }
  }

  return state;
}

function Cart3() {
  let [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h2>Shopping Cart</h2>

      <h3>Items: {state.count}</h3>

      <button onClick={() => dispatch({ type: "ADD" })}>
        Add Item
      </button>

      <button
        onClick={() => dispatch({ type: "REMOVE" })}
        disabled={state.count === 0}>
        Remove Item
      </button>
    </div>
  )
}

export default Cart3