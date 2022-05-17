import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { StudentScreen } from '../components/students/StudentScreen'
import { TeacherScreen } from '../components/teachers/TeacherScreen'
import { Sidebar } from '../components/ui/Sidebar'

export const DashboardRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <Routes>
        <Route path="teacher" element={<TeacherScreen />} />
        <Route path="student" element={<StudentScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="/" element={<DashboardScreen />} />
      </Routes>       
    </>
  )
}
