import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/login';
import { ACTIONS } from '../Reducers/actions';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  const r = ACTIONS.DECREMENT;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
      <br/>
    </BrowserRouter>
  )
}
