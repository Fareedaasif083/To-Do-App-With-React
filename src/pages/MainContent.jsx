import React from 'react'
import './MainContent.css'
const MainContent = () => {
  return (
    <div>
       <main id="main-content" className="main-content">
      <header className="main-header">
        <h2 id="section-title">All Task</h2>
        <button id="add-task-main">+ Add Task</button>
        
      </header>

      <p className="no-task" id="no-task-msg">There is no task added yet</p>
      <div id="tasks-list" className="tasks-list"></div>
      
    </main>
    </div>
  )
}

export default MainContent
