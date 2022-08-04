import React from "react";
import { Todos } from "./components/Todos";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>To Do List 2022</h1>
      <Todos />
    </div>
  );
};

export default App;
