import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddTask.css";
// import './Responsive.css'

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const navigate=useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate, priority };
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    savedTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const setToday = () => {
    const today = new Date().toISOString().split("T")[0];
    setDueDate(today);
  };

  const handleTomorrow = () => {
    const tomorrow = new Date(Date.now() + 86400000)
      .toISOString()
      .split("T")[0];
    setDueDate(tomorrow);
  };

  return (
    <div className="form-container">
      <h2>Add New Task</h2>

      <form id="add-task-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="title">
            Title <small style={{ color: "#888" }}>(required)</small>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={title}
            onChange={(e) => {
              e.target.value;
            }}
          />
        </div>

        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => {
              e.target.value;
            }}
          ></textarea>
        </div>

        <div className="form-row" style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="dueDate">Due date</label>
            <div className="date-options">
              <button type="button" id="todayBtn" onClick={setToday}>
                Today
              </button>
              <button type="button" id="tomorrowBtn">
                Tomorrow
              </button>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                onClick={handleTomorrow}
              />
            </div>
          </div>
          <div style={{ width: "160px" }}>
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={priority}
              onChange={(e) => {
                e.target.value;
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn-primary" type="submit">
            Save Task
          </button>
          <button
            type="button"
            id="cancel-btn"
            className="btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
