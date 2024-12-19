import React from "react";

const Stats = ({ initialItems }) => {
  const packedItem = initialItems.filter((item) => item.packed);
  const percentagePacked = packedItem.length
    ? ((packedItem.length / initialItems.length) * 100).toFixed(2)
    : 0;
  return (
    <footer className="stats">
      <em>
        💼 You have {initialItems.length} items on your list, and you already
        packed {packedItem.length} ({percentagePacked}%)
      </em>
    </footer>
  );
};

export default Stats;
