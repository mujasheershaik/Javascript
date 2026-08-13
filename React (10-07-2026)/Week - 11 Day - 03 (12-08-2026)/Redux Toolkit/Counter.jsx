import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./Counterslice"

function Counter4() {
  let count = useSelector(
    (state) => state.counter.value
  )

  let dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  )
}

export default Counter4