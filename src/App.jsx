
import React from 'react';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import MainContent from './pages/MainContent.jsx';
import AddTask from './pages/AddTask.jsx';
import './App.css'
import "./Responsive.css"

const router=createBrowserRouter([
  {
    path:"/",
    element:( 
      <>
      <Navbar/>
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

