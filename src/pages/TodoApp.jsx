import { useState, useRef } from "react";
import TodoList from "../components/TodoList";
import { generateId } from "../utils/idGenerator";
import useLocalStorage from "../hooks/useLocalStorage";

// TODO: FIX BACKTRACKING OF TODOS

export default function TodoApp() {
  const [todo, setTodo] = useState([]);
  const newTodo = useRef();
  const [handleStoreItem] = useLocalStorage();

  const addTodoItem = () => {
    if (newTodo.current.value === "") return;
    setTodo((prevTodo) => [
      ...prevTodo,
      {
        item: newTodo.current.value,
        id: generateId(),
        completed: false,
      },
    ]);
    return handleStoreItem(todo);
  };

  return (
    <>
      <div className="todo-form">
        <div className="form-group">
          <label htmlFor="form-label">New Todo</label>
          <input
            type="text"
            id="form-input"
            placeholder="Enter your todo item"
            ref={newTodo}
          />
        </div>
        <button onClick={addTodoItem} type="submit">
          Add
        </button>
      </div>

      <div className="todo-list">
        <TodoList prop={todo} />
      </div>
    </>
  );
}
