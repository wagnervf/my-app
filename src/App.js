import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTaskas] = useState([
    { id: 1, title: "Task One", completed: false },
    { id: 2, title: "Task Two", completed: true },
    { id: 3, title: "Task Three", completed: false },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <Tasks props={tasks} />
      </div>
    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=ErjWNvP6mko
