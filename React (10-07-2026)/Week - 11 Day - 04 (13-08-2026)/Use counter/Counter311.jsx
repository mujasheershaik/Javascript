import Usecounter from "./Usecounter2"

function Counter311() {
  let {
    count,
    increase,
    decrease,
    reset
  } = Usecounter()

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increase}>
        +
      </button>

      <button onClick={decrease}>
        -
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default Counter311