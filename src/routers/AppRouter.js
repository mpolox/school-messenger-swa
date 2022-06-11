import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/login';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen setCurrentUser={setCurrentUser} />} />
        <Route path="/" element={<LoginScreen setCurrentUser={setCurrentUser} />} />
        <Route path="/*" element={<DashboardRoutes currentUser={currentUser}/>} />
      </Routes>
      <br/>
    </BrowserRouter>
  )
}
