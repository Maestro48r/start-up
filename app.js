import react from 'react';

const app = () => <h1>Hello, World!</h1>;

react.render(document.getElementById('root'));


import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={`app ${isActive ? "danger" : ""}`}>
      <h1>Hello react</h1>
      <button onClick={handleToggle}>Toggle class</button>
    </div>
  );
}