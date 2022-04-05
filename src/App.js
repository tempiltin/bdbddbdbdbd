import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"


import NaV from './Components/header/NaV';
import Article from './pages/Article'
import JavaScript from './pages/JavaScript';
import Portfolio from './pages/Portfolio';
import Demo1 from './demo-page/Demo1';
import Demo2 from './demo-page/Demo2';
import Demo3 from './demo-page/Demo3';
function App() {
  return (
    <>
      <NaV />
      
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article' element={<Article />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/Js-about-527eda1a-1f2d-419b-be96-8ceffd72fdd1' element={<JavaScript />} />
        <Route path='/demo-1' element={<Demo1 />} />
        <Route path='/demo-2' element={<Demo2 />} />
        <Route path='/demo-3' element={<Demo3 />} />

      </Routes>
    </>
  );
}

export default App;
