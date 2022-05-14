import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SearchScreen } from '../components/search/SearchScreen';
import { StudentScreen } from '../components/students/StudentScreen';
import { TeacherScreen } from '../components/teachers/TeacherScreen';
import { Navbar } from '../components/ui/Navbar';




export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentScreen />} />
        <Route path="/teacher" element={<TeacherScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>    
    </BrowserRouter>
  )
}
