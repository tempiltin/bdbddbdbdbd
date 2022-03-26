import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import NaV from './Components/header/NaV';
import Article from './pages/Article'
import Demo1 from './demo-page/Demo1';
function App() {
  return (
    <>
      <NaV />
      <Routes>
        <Route path='/article' element={<Article />} />
        <Route path='/' element={<Home />} />
        <Route path='/demo-1' element={<Demo1 />} />
      
      </Routes>
    </>
  );
}

export default App;
