import React, {useState} from 'react'
import About from './pages/About';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div>
        <NavBar/> 
      <Routes>
        {/* "/"  is used for settig 1st page when we open the app */}
      <Route path='/' element={<Home />}/>             
      <Route path='/Home' element={<Home />} />
      <Route path='/Blogs' element={<Blogs />}/>
      <Route path='/About' element={<About />} />
    </Routes>
    </div>
  )
}

export default App
