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

export const router = createBrowserRouter([
  {
    // element: <Layout/>,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/teacher-dashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "/teacher-dashboard/add-module",
        element: <AddModule />,
      },
      {
        path: "/teacher-dashboard/add-exam",
        element: <AddExam />,
      },
      {
        path: "/teacher-dashboard/exam-notes",
        element: <ExamNotes />,
      },
      {
        path: "/teacher-dashboard/attendance-tracking",
        element: <AttendanceTracking />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  // {
  //     path: "/login",
  //     element: <Login/>,
  // }
]);
