import './App.css'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from "./contexts/authContext"; // Import AuthProvider
import Login from "./components/auth/login"; // Import Login componen
import React from 'react';

// import AuthContext from "./context/AuthContext";
function App() {


  return (

    // <AuthContext>
    //  <RouterProvider router={router}/>
    // </AuthContext>


      <AuthProvider>
        <RouterProvider router={router}>
          <Login />
        </RouterProvider>
      </AuthProvider>


  )
}

export default App