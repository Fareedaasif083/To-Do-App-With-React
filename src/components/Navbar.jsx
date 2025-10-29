import React, { useState, useEffect } from "react";
import './Responsive.css'
import "./Navbar.css";

const Navbar = ({OnSearch}) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchBar = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    Onsearch(value);
  };

  const sidebarToggle = () => {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("expanded");
  };
  return (
    <nav className="navbar">
      <div className="header-left">
        <button id="menu-toggle" onClick={sidebarToggle}>
          ☰
        </button>
        <h1 id="app-title">My To-Do</h1>
      </div>
      <div className="header-middle">
        <input
          type="text"
          id="search-bar"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearchBar}
        />
      </div>
      <div className="header-right">
        <button id="search-icon" onClick={()=>{
          const searchbar=document.getElementById('search-bar');
          searchbar.classList.toggle('active');
          searchbar.focus();
        }}>🔍</button>
        <button id="theme-toggle" className="theme" onClick={themeToggle}>
          {theme === "light" ? "Dark" : "Light"}Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
