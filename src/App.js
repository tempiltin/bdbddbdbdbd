import React from 'react'
import { Routes, Route } from "react-router-dom";
import IndexPage from "./Pages/Index"
import MobileNavbar from './Components/MobileNavbar/MobileNavbar';
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return <React.Fragment>
    <Navbar />
    <Routes>
      <Route path='/' element={<IndexPage />} />
    </Routes>
    <MobileNavbar />
  </React.Fragment>
}

export default App