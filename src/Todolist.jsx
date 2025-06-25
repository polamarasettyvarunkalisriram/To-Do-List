import React, { useState } from "react";
import "./todo.css";

const Todolist = () => {
    const [task, settask] = useState([
  { text: "Reply to client emails", completed: false },
  { text: "Update project status report", completed: true },
  { text: "Attend 3 PM team meeting", completed: false },
  { text: "Review code submissions", completed: false },
  { text: "Prepare slides for tomorrow’s presentation", completed: false },
  { text: "Submit weekly timesheet", completed: true },
]);

  const [newtask, setnewtask] = useState("");

  const handeltheinput = (e) => setnewtask(e.target.value);

  const addtask = () => {
    if (newtask.trim()) {
      settask([...task, { text: newtask, completed: false }]);
      setnewtask("");
    }
  };

  const toggleComplete = (index) => {
    const updated = [...task];
    updated[index].completed = !updated[index].completed;
    settask(updated);
  };

  const deletetask = (index) => {
    const updated = task.filter((_, i) => i !== index);
    settask(updated);
  };

  return (
    <div className="todo-box">
      <h2>
        To-Do List <span>📝</span>
      </h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add your task"
          value={newtask}
          onChange={handeltheinput}
        />
        <button onClick={addtask}>ADD</button>
      </div>
      <ul className="task-list">
        {task.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>
              <input type="checkbox" checked={item.completed} readOnly />
              {item.text}
            </span>
            <button onClick={() => deletetask(index)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
