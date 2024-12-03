import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Usuarios from './pages/Usuarios';
import MasInformacion from './pages/MasInformacion';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/mas-informacion" element={<MasInformacion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

