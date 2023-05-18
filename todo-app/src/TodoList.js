import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import ToDo from "./ToDo";

const TodoList = () => {
  const initialState = ["Let us go"];
  const [todos, setTodos] = useState(initialState);

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };

  return (
    <div>
      <h3>My Todo List</h3>
      <NewTodoForm addTodo={addTodo} />

      {todos.map(({ id, todo }) => (
        <ToDo key={id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
