
import {  BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';
import './main.css';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Portfolio />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
