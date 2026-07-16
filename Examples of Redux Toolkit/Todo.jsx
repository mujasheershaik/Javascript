import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./Reducer";

function Todo() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => {
    return state.todo.todos;
  });

  const dispatch = useDispatch();

  function handleAdd() {
    if (text.trim() === "") return;

    dispatch(addTodo(text));

    setText("");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Redux Toolkit Todo List</h1>

      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <hr />

      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h3>{todo}</h3>

            <button onClick={() => dispatch(deleteTodo(index))}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;