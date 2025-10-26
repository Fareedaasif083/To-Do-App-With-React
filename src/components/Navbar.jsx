import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='header-left'>
        <button id='menu-toggle'>
            ☰
        </button>
        <h1 id='app-title'>My To-Do</h1>
    </div>
    <div className='header-middle'>
        <input type="text" id='search-bar' placeholder='Search tasks...' />
    </div>
    <div className='header-right'>
        <button id='search-icon'>🔍</button>
        <button id='theme-toggle' className='theme'>Mode</button>
    </div>
    </nav>
  )
}

export default Navbar
