import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"


import NaV from './Components/header/NaV';
import Article from './pages/Article'
import JavaScript from './pages/JavaScript';
import Portfolio from './pages/Portfolio';
import Demo1 from './demo-page/Demo1';
import Demo2 from './demo-page/Demo2';
import Demo3 from './demo-page/Demo3';
import Demo4 from './demo-page/Demo4';
import Demo5 from './demo-page/Demo5';
import Demo6 from './demo-page/Demo6';
import Demo7 from './demo-page/Demo7';

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
        <Route path='/demo-4' element={<Demo4 />} />
        <Route path='/demo-5' element={<Demo5 />} />
        <Route path='/demo-6' element={<Demo6 />} />
        <Route path='/demo-7' element={<Demo7 />} />

      </Routes>
    </>
  );
}

export default App;
