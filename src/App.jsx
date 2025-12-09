// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard';
import Pacientes from './views/pacientes';
import Detalles_paciente from './views/detalles_paciente';
import Profile from './views/profile';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>  
        <Route path="/" element={<Dashboard />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/pacientes/:id" element={<Detalles_paciente />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;