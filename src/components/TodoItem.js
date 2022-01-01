import React from "react";
import { HiX } from "react-icons/hi";
import styles from "../styles/TodoItem.module.css";

function TodoItem({ todo, toggleTodoStatus, deleteTodo }) {
  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.isDone}
        onChange={(e) => toggleTodoStatus(todo.id, e.target.checked)}
      />
      <label className="todo-content" htmlFor={todo.id}>
        {todo.title}
      </label>
      <span onClick={() => deleteTodo(todo.id)}>
        <HiX />
      </span>
    </li>
  );
}

export default TodoItem;
