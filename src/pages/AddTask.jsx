import React from "react";
import "./AddTask.css";

const AddTask = () => {
  return (
    <div className="form-container">
      <h2>Add New Task</h2>

      <form id="add-task-form">
        <div className="form-row">
          <label htmlFor="title">
            Title <small style={{ color: "#888" }}>(required)</small>
          </label>
          <input id="title" name="title" type="text" required />
        </div>

        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"></textarea>
        </div>

        <div className="form-row" style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="dueDate">Due date</label>
            <div className="date-options">
              <button type="button" id="todayBtn">
                Today
              </button>
              <button type="button" id="tomorrowBtn">
                Tomorrow
              </button>
              <input id="dueDate" name="dueDate" type="date" />
            </div>
          </div>
          <div style={{ width: "160px" }}>
            <label htmlFor="priority">Priority</label>
            <select id="priority" name="priority" defaultValue={"medium"}>
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
          <button type="button" id="cancel-btn" className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
