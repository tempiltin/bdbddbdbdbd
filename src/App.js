import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import NaV from './Components/header/NaV';
import Article from './pages/Article'
import Demo1 from './demo-page/Demo1';
import Demo2 from './demo-page/Demo2';
import Demo3 from './demo-page/Demo3';
function App() {
  return (
    <>
      <NaV />
      <Routes>
        <Route path='/article' element={<Article />} />
        <Route path='/' element={<Home />} />
        <Route path='/demo-1' element={<Demo1 />} />
        <Route path='/demo-2' element={<Demo2 />} />
        <Route path='/demo-3' element={<Demo3 />} />
      
      </Routes>
    </>
  );
}

export default App;
