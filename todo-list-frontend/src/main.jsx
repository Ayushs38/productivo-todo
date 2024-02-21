import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MyDay from './components/screens/MyDay.jsx';
import Important from './components/screens/important.jsx';
import Planned from './components/screens/Planned.jsx';
import AssignedToMe from './components/screens/AssignedToMe.jsx';
import FlaggedToMe from './components/screens/FlaggedToMe.jsx';
import AllTasks from './components/screens/AllTasks.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="my-day" element={<MyDay />} />
      <Route path="important" element={<Important/>} />
      <Route path="planned" element={<Planned/>} />
      <Route path="assigned-to-me" element={<AssignedToMe/>} />
      <Route path="flagged-to-me" element={<FlaggedToMe/>} />
      <Route path="all-tasks" element={<AllTasks/>} />
      
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
