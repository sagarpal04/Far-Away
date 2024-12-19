import React from "react";

const PackingList = ({ initialItems, setInitialItems }) => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item setInitialItems={setInitialItems} item={item} />
        ))}
      </ul>
    </div>
  );
};
function Item({ item, setInitialItems }) {
  function handleDelete(id) {
    setInitialItems((prev) => prev.filter((item) => id !== item.id));
  }
  function handleCheckboxChange(id) {
    setInitialItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleCheckboxChange(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}

export default PackingList;
