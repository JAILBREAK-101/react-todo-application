import React, { useState, useRef } from "react";
import EditTodoModal from "../hooks/useModal";
import useModal from "../hooks/useModal";

export default function Todo({ todo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleTodoStatus = () => (todo.completed = !todo.completed);
  const todoItemRef = useRef();

  function handleEditModal() {
    setIsModalOpen(() => !isModalOpen);
    alert(todoItemRef.current.innerText);
  }

  function deleteTodo() {
    todo.remove()
  }

  return (
    <ul className="todo-list">
      {todo.length == 0 ? (
        <p className="todo-indicator">No Todo Item Added</p>
      ) : (
        todo.map((eachTodo) => {
          return (
            <li key={eachTodo.id} className="todo-item">
              <input
                id={eachTodo.id}
                type="checkbox"
                onInput={handleTodoStatus}
              />
              <label ref={todoItemRef} htmlFor={eachTodo.id}>
                {eachTodo.item}
              </label>

              <div className="todo-btn">
                <button onClick={handleEditModal} className="todo-btn__edit">
                  Edit Item
                </button>
                <button onClick={deleteTodo} className="todo-btn__delete">
                  Delete Item
                </button>
              </div>
              {isModalOpen ? (
                <EditTodoModal todoValue={eachTodo.item} />
              ) : (
                <></>
              )}
            </li>
          );
        })
      )}
    </ul>
  );
}

// TODO: MAKE EDIT TODO MODAL RENEWABLE AS A CUSTOM HOOK AND CODE DELETE TODO MODAL
