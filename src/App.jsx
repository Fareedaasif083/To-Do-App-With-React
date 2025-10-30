
import { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './pages/MainContent';
import AddTask from './pages/AddTask';

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
