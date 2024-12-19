import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const App = () => {
  const [initialItems, setInitialItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
  ]);
  return (
    <div className="app">
      <Logo />
      <Form setInitialItems={setInitialItems} />
      <PackingList
        initialItems={initialItems}
        setInitialItems={setInitialItems}
      />
      <Stats initialItems={initialItems} />
    </div>
  );
};

export default App;
