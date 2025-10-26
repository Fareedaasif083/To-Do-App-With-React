import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside id='sidebar' className='sidebar active'>
        <button id='add-task-btn'>+ Add Task</button>
        <nav className='manu'>
            <ul>
                <li>
                    <a href="" id='all-tasks'>All Tasks<span className='count'>0</span></a>
                </li>

                <li>
                    <a href="" id='today-tasks'>Today<span className='count'>0</span></a>
                </li>

                <li>
                    <a href="" id='completed-tasks'>Completed<span className='count'>0</span></a>
                </li>

                <li>
                    <a href="" id='pending-tasks'>Pending<span className='count'>0</span></a>
                </li>
            </ul>
        </nav>

        <div className='filter-section'>
            <h3>Filter</h3>
            <select  id="filter-tasks">
                <option value="all">All</option>
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
            </select>
        </div>

        <div className='trash-bin'>
            <a href="" id='trash'>
              🗑️ Trash
              <span className='count'>0</span>
            </a>
        </div>
    </aside>
  )
}

export default Sidebar
