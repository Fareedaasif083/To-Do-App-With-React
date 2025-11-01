
import React from 'react';
import {createHashRouter , RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import MainContent from './pages/MainContent.jsx';
import AddTask from './pages/AddTask.jsx';
import './App.css'
import "./Responsive.css"
import Sidebar from './components/Sidebar.jsx';

const router=createHashRouter([
  {
    path:"/",
    element:( 
      <>
      <Navbar/>
      <Sidebar/>
      <MainContent/>
      </>
    )
  },
  {
    path:"/add-task",
    element:(
      <>
      <Navbar/>
      <AddTask/>
      </>
    ),
  },
]);

function App() {
  return  <RouterProvider router={router}/>;    

}

export default App