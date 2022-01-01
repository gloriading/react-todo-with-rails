import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import styles from "../styles/TodoContainer.module.css";

function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("/api/version1/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("fetch todos: ", error);
      }
    };
    fetchTodos();
  }, []);

  const onInputChange = (e) => setUserInput(e.target.value);

  const addTodo = async (e) => {
    if (e.key === "Enter" && Boolean(userInput)) {
      try {
        const res = await axios.post("/api/version1/todos", {
          todo: { title: userInput, isDone: false },
        });
        setTodos((preTodos) => [res.data, ...preTodos]);
        setUserInput("");
      } catch (error) {
        console.error("add todo: ", error);
      }
    }
  };

  const toggleTodoStatus = async (id, newStatus) => {
    try {
      await axios.put(`/api/version1/todos/${id}`, {
        todo: { isDone: newStatus },
      });

      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: newStatus } : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error("update status: ", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/version1/todos/${id}`);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("delete todo: ", id);
    }
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoForm}>
        <input
          type="text"
          placeholder="Enter a new todo and press enter"
          value={userInput}
          onChange={onInputChange}
          onKeyPress={addTodo}
        />
      </div>
      <div className={styles.todoLists}>
        <ul>
          {todos.length > 0 &&
            todos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleTodoStatus={toggleTodoStatus}
                  deleteTodo={deleteTodo}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default TodoContainer;
