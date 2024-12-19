import React, { useState } from "react";

const PackingList = ({ initialItems, setInitialItems }) => {
  const [sortBy, setSortBy] = useState("input");
  function handleClear() {
    const confirmed = window.confirm("Are you sure want to delete all items? ");
    if (confirmed) {
      setInitialItems([]);
    }
  }
  let sortedItems;
  if (sortBy === "input") sortedItems = initialItems;
  if (sortBy === "description")
    sortedItems = initialItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = initialItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item setInitialItems={setInitialItems} item={item} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => handleClear()}>Clear list</button>
      </div>
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
