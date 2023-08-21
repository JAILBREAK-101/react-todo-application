import React from "react";

export default function Todo({ todo }) {
  const handleTodoStatus = () => (todo.completed = !todo.completed);

  return (
    <ul>
      {JSON.parse(localStorage.getItem("todoItems")).map((eachTodo) => {
        return (
          <li key={eachTodo.id} className="todo-item">
            <input
              id={eachTodo.id}
              type="checkbox"
              onInput={handleTodoStatus}
            />
            <label htmlFor={eachTodo.id}>{eachTodo.item}</label>

            <div className="todo-btn">
              <button className="todo-btn__edit">Edit Item</button>
              <button className="todo-btn__delete">Delete Item</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
