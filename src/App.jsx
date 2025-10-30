
import { useState } from 'react';
import {createBroserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './pages/MainContent';
import AddTask from './pages/AddTask';

import './App.css'
import "./Responsive.css"

const router=createBroserRouter([
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
