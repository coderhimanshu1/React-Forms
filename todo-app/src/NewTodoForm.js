import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const initialState = {
    todo: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData });
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Todo:</label>
      <input
        id="todo"
        type="text"
        name="todo"
        placeholder="To Do"
        value={formData.todo}
        onChange={handleChange}
      />

      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
