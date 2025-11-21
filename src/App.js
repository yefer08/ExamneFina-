import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal - Lista de tareas */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta para crear nueva tarea */}
          <Route path="/form" element={<Form />} />
          
          {/* Ruta para editar tarea existente */}
          <Route path="/form/:id" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
