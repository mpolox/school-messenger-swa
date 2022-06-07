import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NotFound404 } from '../components/404/NotFound404';
import { LoginScreen } from '../components/login/login';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
      <br/>
    </BrowserRouter>
  )
}
