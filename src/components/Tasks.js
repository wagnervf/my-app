import React from "react";
import Task from "./Task";

const Tasks = ({ props }) => {
  return (
    <div>
      {props.map((value) => (
        <Task key={value.id} task={value} />
      ))}
    </div>
  );
};

export default Tasks;
