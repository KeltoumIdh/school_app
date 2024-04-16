import './App.css'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import React from 'react';

// import AuthContext from "./context/AuthContext";
function App() {


  return (

    // <AuthContext>
      <RouterProvider router={router}/>
    // </AuthContext>


  )
}

export default App
