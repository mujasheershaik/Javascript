import React, { useCallback, useState } from "react"
import Todo from "./Todo"

function Todoapp() {
  let [todos, setTodos] = useState([])
  let [count, setCount] = useState(0)

  let addTodo = useCallback(() => {
    setTodos((todos) => [
      ...todos,
      "New Todo"
    ])
  }, [])

  return (
    <div>
      <h1>Todo Application</h1>

      <button onClick={addTodo}>
        Add Todo
      </button>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <Todo todos={todos} />
    </div>
  )
}

export default Todoapp