import { Routes, Route } from 'react-router-dom';

import './App.css'


import Navbar from './components/Navbar'
import Home from './components/Home'
import Map from './components/Map'

function App() {
  
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
    </>
  )
}

export default App
