import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState({
    taskName: "",
    companyName: "",
    charges: "",
    deadline: "",
  });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const addTask = () => {
    if (!task.taskName || !task.companyName || !task.charges || !task.deadline) {
      alert("Please fill all fields!");
      return;
    }
    setTasks([...tasks, task]);
    setTask({ taskName: "", companyName: "", charges: "", deadline: "" });
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📋 Add Task</h1>

      {/* Input Form */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4">
        <input
          type="text"
          name="taskName"
          placeholder="Task Name"
          value={task.taskName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={task.companyName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="number"
          name="charges"
          placeholder="Charges"
          value={task.charges}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="date"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        <button
          onClick={addTask}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          ➕ Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="mt-6 w-full max-w-2xl">
        {tasks.map((t, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-3"
          >
            <div>
              <h2 className="font-semibold">{t.taskName}</h2>
              <p className="text-sm text-gray-600">
                Company: {t.companyName} | Charges: ${t.charges} | Deadline:{" "}
                {t.deadline}
              </p>
            </div>
            <button
              onClick={() => removeTask(index)}
              className="text-red-600 hover:text-red-800"
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
