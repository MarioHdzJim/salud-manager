import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePacientes } from '../hooks/usePacientes';
import Loading from '../components/loading';
import SearchInput from '../components/searchInput';
import './pacientes.css';

const Pacientes = () => {
  const { pacientes } = usePacientes();
  const [busqueda, setBusqueda] = useState('');

  if (pacientes.length === 0) {
    return <Loading />;
  }
  
  const pacientesFiltrados = (pacientes || []).filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (!pacientes || pacientes.length === 0) {
    return (
      <div className="pacientes-page">
        <h1>Listado de Pacientes</h1>
        <p>Cargando pacientes...</p>
      </div>
    );
  }

  return (
    <div className="pacientes-page">
      <h1>Listado de Pacientes</h1>

      <SearchInput
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="pacientes-grid">
        {pacientesFiltrados.map((paciente) => (
          <article key={paciente.id} className="paciente-card">
            <h3>{paciente.nombre}</h3>
            <p><strong>Edad:</strong> {paciente.edad} años</p>
            <p><strong>Motivo:</strong> {paciente.motivo}</p>

            <Link to={`/pacientes/${paciente.id}`} className="paciente-btn">
              Ver Expediente
            </Link>
          </article>
        ))}

        {pacientesFiltrados.length === 0 && (
          <p>No se encontraron pacientes con ese nombre.</p>
        )}
      </div>
    </div>
  );
};

export default Pacientes;