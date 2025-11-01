
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ onFilterChange }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  };

  const goToAddTask = () => {
    navigate("/add-task");
  };

  const handleFilterChange = (e) => {
    setFilter(e);
    onFilterChange(e);
  };

  const handlePriorityChange = (e) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <aside id="sidebar" className="sidebar active">
      <button id="add-task-btn" onClick={goToAddTask}>
        + Add Task
      </button>
      <nav className="manu">
        <ul>
          <li>
            <a href="" id="all-tasks" onClick={() => handleFilterChange("all")}>
              All Tasks
              <span className="count">
                {tasks.filter((t) => !t.trashed).length}
              </span>
            </a>
          </li>

          <li>
            <a
              href=""
              id="today-tasks"
              onClick={() => handleFilterChange("all")}
            >
              Today
              <span className="count">
                {tasks.filter((t) => !t.trashed).length}
              </span>
            </a>
          </li>

          <li>
            <a
              href=""
              id="completed-tasks"
              onClick={() => handleFilterChange("all")}
            >
              Completed
              <span className="count">
                {tasks.filter((t) => !t.trashed).length}
              </span>
            </a>
          </li>

          <li>
            <a
              href=""
              id="pending-tasks"
              onClick={() => handleFilterChange("all")}
            >
              Pending
              <span className="count">
                {tasks.filter((t) => !t.trashed).length}
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="filter-section">
        <h3>Filter</h3>
        <select id="filter-tasks" onClick={() => handlePriorityChange("all")}>
          <option value="all">All</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>

      <div className="trash-bin">
        <a href="" id="trash" onClick={() => handleFilterChange("all")}>
          🗑️ Trash
          <span className="count">
            {tasks.filter((t) => !t.trashed).length}
          </span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
