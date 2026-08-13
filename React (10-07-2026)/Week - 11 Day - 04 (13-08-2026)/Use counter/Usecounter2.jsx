import { useState } from "react"

function Usecounter2() {
  let [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return {
    count,
    increase,
    decrease,
    reset
  }
}

export default Usecounter2