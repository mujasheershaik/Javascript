import React from "react"

function Todo({ todos }) {
  console.log("Todo component rendered")

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  )
}

export default React.memo(Todo)