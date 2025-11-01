import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainContent.css";
import Sidebar from "../components/Sidebar";
const MainContent = () => {
  <div>hi</div>
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm]=useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  };

  const goToAddtask = () => {
    navigate("/add-task");
  };

  const updateTasks = (updated) => {
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const toggleStar = (e) => {
    const updated = [...tasks];
    updated[e].starred = !updated[e].starred;
    updateTasks(updated);
  };

  const toggleComplete = (e) => {
    const updated = [...tasks];
    updated[e].completed = !updated[e].completed;
    updateTasks(updated);
  };

  const deleteTask = (e) => {
    const updated = [...tasks];
    updated[e].trashed = true;
    updateTasks(updated);
  };

  const renameTask = (e) => {
    const newTitle = prompt("Enter new title", tasks[e].title);
    if (newTitle) {
      const updated = [...tasks];
      updated[e].title = newTitle;
      updateTasks(updated);
    }
  };

  const restoreTask = (e) => {
    const updated = [...tasks];
    updated[e].trashed = false;
    updateTasks(updated);
  };

  const permanentDelete = (e) => {
    const updated = tasks.filter((_, i) => i !== e);
    updateTasks(updated);
  };

  const searchHandler=(value)=>{
    setSearchTerm(value);
  }

  const filterHandler=(selected)=>{
    setFilter(selected);
  }

  const getSectionTitle = () => {
    const containerTitle = {
      all: "All Tasks",
      today: "Today's Tasks",
      completed: "Completed Tasks",
      pending: "Pending Tasks",
      high: "High Priority Tasks",
      medium: "Medium Priotity Tasks",
      low: "Low Priotity Tasks",
      trash: "Trash Bin",
    };
    return containerTitle[filter] || "Tasks";
  };

  const getFilteredTasks = () => {
    const today = new Date().toISOString().split("T")[0];
    let filteredTasks = [];

    switch (filter) {
      case "today":
        filteredTasks = tasks.filter((t) => t.dueDate === today && !t.trashed);
        break;
      case "completed":
        filteredTasks = tasks.filter((t) => t.completed && !t.trashed);
        break;
      case "pending":
        filteredTasks = tasks.filter((t) => !t.completed && !t.trashed);
        break;
      case "high":
        filteredTasks = tasks.filter(
          (t) => t.priority?.toLowerCase() === "high" && !t.trashed
        );
        break;
      case "medium":
        filteredTasks = tasks.filter(
          (t) => t.priority?.toLowerCase() === "medium" && !t.trashed
        );
        break;
      case "low":
        filteredTasks = tasks.filter(
          (t) => t.priority?.toLowerCase() === "low" && !t.trashed
        );
        break;
      case "trash":
        filteredTasks = tasks.filter((t) => t.trashed);
        break;
      default:
        filteredTasks = tasks.filter((t) => !t.trashed);
    }

    if (searchTerm.trim() !== "") {
      filteredTasks = filteredTasks.filter((t) => {
        t.title.toLowerCase().includes(searchTerm) ||
          t.description.toLowerCase().includes(searchTerm);
      });
    }

    return filteredTasks;
  };

  const tasksFilters = getFilteredTasks();
  return (
    <>
    <div>
      <Sidebar onFilterChange={filterHandler}/>
      <main id="main-content" className="main-content">
        <header className="main-header">
          <h2 id="section-title">{getSectionTitle()}</h2>
          <button id="add-task-main" onClick={goToAddtask}>
            + Add Task
          </button>
        </header>
        {tasksFilters.length === 0 ? (
          <p className="no-task" id="no-task-msg">
            There is no task added yet
          </p>
        ) : (
          <div id="tasks-list" className="tasks-list">
            {tasksFilters.map((task, e) => (
              <div
                key={e}
                className={`task-item ${task.completed ? "completed" : ""}`}
              >
                <div className="task-info">
                  <h3 className={`task-title ${task.completed ? "done" : ""}`}>
                    {task.title}
                  </h3>
                  <p>{task.description}</p>
                  <small>
                    Due: {task.dueDate || "No date"} | Priority: {task.priority}
                  </small>
                </div>
                <div className="task-filters">
                  {filter !== "trash" ? (
                    <>
                      <button
                        className="star-btn"
                        onClick={() => toggleStar(e)}
                      >
                        {task.starred ? "Unstar" : "Star"}
                      </button>
                      <button
                        className="complete-btn"
                        onClick={() => toggleComplete(e)}
                      >
                        {task.completed ? "Undo" : "Complete"}
                      </button>
                      <button
                        className="edit-btn"
                        onClick={() => renameTask(e)}
                      >
                        Rename
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => deleteTask(e)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="restore-btn"
                        onClick={() => restoreTask(e)}
                      >
                        Restore
                      </button>
                      <button
                        className="permanent-delete-btn"
                        onClick={() => permanentDelete(e)}
                      >
                        Delete Permanently
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
    </>
  );
};

export default MainContent;
