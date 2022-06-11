import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { StudentScreen } from '../components/students/StudentScreen'
import { TeacherScreen } from '../components/teachers/TeacherScreen'
import { NavbarMenu } from '../components/ui/Navbar'

export const DashboardRoutes = ({currentUser}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <>
      {/* <Sidebar /> */}
      <NavbarMenu/>      
      <Routes>
        <Route path="teacher" element={<TeacherScreen currentUser={currentUser}/>} />
        <Route path="student" element={<StudentScreen currentUser={currentUser}/>} />
        <Route path="search" element={<SearchScreen currentUser={currentUser}/>} />
        <Route path="dashboard" element={<DashboardScreen currentUser={currentUser}/>} />
      </Routes>       
    </>
  )
}
