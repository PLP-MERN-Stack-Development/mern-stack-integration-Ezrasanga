import React, { useState } from "react";
import Button from "./Button";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button label="Add" onClick={addTask} />
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks added yet.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((t) => (
            <li
              key={t.id}
              className={`flex justify-between items-center p-2 rounded-lg border ${
                t.completed ? "bg-green-100" : "bg-gray-50"
              }`}
            >
              <span
                onClick={() => toggleTask(t.id)}
                className={`cursor-pointer ${
                  t.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {t.text}
              </span>
              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskManager;
