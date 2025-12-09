import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePacientes } from '../hooks/usePacientes';

const DetallePaciente = () => {
  const { id } = useParams();
  const { pacientes } = usePacientes();
  const paciente = pacientes.find(p => p.id == id);
  const navigate = useNavigate();

  if (!paciente) {
    return <div>Cargando expediente o paciente no encontrado...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px', cursor: 'pointer' }}>
        ← Volver
      </button>

      <div style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '10px', background: '#fff', color: '#111' }}>
        <h1>Expediente Clínico: {paciente.nombre}</h1>
        <hr />
        <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
            <p><strong>ID Paciente:</strong> {paciente.id}</p>
            <p><strong>Edad:</strong> {paciente.edad} años</p>
            <p><strong>Fecha de Ingreso:</strong> {paciente.fecha}</p>
            <p><strong>Motivo de Consulta:</strong> {paciente.motivo}</p>
            <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '5px' }}>
                <h3>Notas Médicas:</h3>
                <p>El paciente se presenta estable. Signos vitales dentro de los parámetros normales. Se recomienda seguimiento en 15 días.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetallePaciente;