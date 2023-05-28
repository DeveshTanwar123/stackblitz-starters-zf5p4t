import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Contact from './components/Contact';
import Profile from './components/Profile';
import About from './components/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
