import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setInitialItems }) => {
  const [data, setData] = useState({
    description: "",
    quantity: "",
    id: uuidv4(),
    packed: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setInitialItems((prev) => [...prev, data]);
    setData({
      description: "",
      quantity: "",
      id: uuidv4(),
      packed: true,
    });
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={data.quantity}
        onChange={(e) => setData({ ...data, quantity: e.target.value })}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={data.description}
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
