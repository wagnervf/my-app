import React, { useState } from "react";
import "../App.css";

const Task = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);

  const toggleCompletion = () => {
    setCompleted(!completed);
  };

  return (
    <div className="App-task">
      <h3 style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task.title}
      </h3>
      <button className="App-button" onClick={toggleCompletion}>
        {completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
    </div>
  );
};

export default Task;
