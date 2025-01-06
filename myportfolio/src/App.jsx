import React from 'react'
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter, Routes ,Route, } from 'react-router-dom';
import Aboutme from './pages/Aboutme.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';

export default function App() {
  return (
    <div>
   
      <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/"  element={<Dashboard/>} />
        <Route path="/about" element={<Aboutme/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}
