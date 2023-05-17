import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    color: "",
    width: "",
    height: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue =
      name === "width" || name === "height" ? Number(value) : value;
    setFormData((formData) => ({
      ...formData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="Box Color"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:{formData.width}px</label>
      <input
        id="width"
        type="range"
        name="width"
        min="10"
        max="50"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:{formData.height}px</label>
      <input
        id="height"
        type="range"
        name="height"
        min="10"
        max="50"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
