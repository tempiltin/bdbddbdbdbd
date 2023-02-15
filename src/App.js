import React from 'react'
import { Routes, Route } from "react-router-dom";
import IndexPage from "./Pages/Index"
// import MobileNavbar from './Components/MobileNavbar/MobileNavbar';
import Navbar from './Components/Navbar/Navbar';
import NotFound404 from './Pages/NotFound404';
const App = () => {
  return <React.Fragment>
    <Navbar />
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='*' element={<NotFound404 />} />
    </Routes>
    



    
    <marquee behavior="" direction="">
      web sayt qayta ishlab chiqish jarayonida (0.1.0) versiya
    </marquee>
  </React.Fragment>
}

export default App