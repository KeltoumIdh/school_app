import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../Layouts/App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Calendar from "../pages/Calendar/index";
import TeacherDashboard from "../pages/TeacherDashboard/index";
import AddModule from "../pages/TeacherDashboard/AddModule";
import AddExam from "../pages/TeacherDashboard/AddExam";
import ExamNotes from "../pages/TeacherDashboard/ExamNotes";
import AttendanceTracking from "../pages/TeacherDashboard/AttendanceTracking";
import PrivateRoute from "./privateRoute";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import FetchData from "../pages/FetchData";
import SingleProduct from "../pages/SingleProduct";

export const router = createBrowserRouter([
  {
    // element: <Layout/>,
    element: <App />,
    children: [
      {
        path: "/",
        element: <PrivateRoute element={<Home />} />,
      },
      {
        path: "/calendar",
        element: <PrivateRoute element={<Calendar />} />,
      },
      {
        path: "/teacher-dashboard",
        element: <PrivateRoute element={<TeacherDashboard />} />,
      },
      {
        path: "/teacher-dashboard/add-module",
        element: <PrivateRoute element={<AddModule />} />,
      },
      {
        path: "/teacher-dashboard/add-exam",
        element: <PrivateRoute element={<AddExam />} />,
      },
      {
        path: "/teacher-dashboard/exam-notes",
        element: <PrivateRoute element={<ExamNotes />} />,
      },
      {
        path: "/teacher-dashboard/attendance-tracking",
        element: <PrivateRoute element={<AttendanceTracking />} />,
      },
      {
        path: "/profile",
        element: <PrivateRoute element={<Profile />} />,
      },
      {
        path: "/settings",
        element: <PrivateRoute element={<Settings />} />,
      },
      {
        path: "/module",
        element: <PrivateRoute element={<FetchData />} />,
      },
      {
        path: "/module/:id",
        element: <PrivateRoute element={<SingleProduct />} />,
      },
      {
        path: "*",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <PrivateRoute element={<Home />} />, // Utilisez le composant PrivateRoute pour la route "/home"
      },
    ],
  },
  // {
  //     path: "/login",
  //     element: <Login/>,
  // }
]);
