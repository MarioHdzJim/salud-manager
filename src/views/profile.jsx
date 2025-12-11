import React, { useState, useEffect } from 'react';
import doctorData from '../data/data_doctor.json';
import './profile.css';

const Profile = () => {
  const [doctor, setDoctor] = useState(null);
  const [telefono, setTelefono] = useState('');
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    setDoctor(doctorData);
    setTelefono(doctorData.telefono);
  }, []);

  const handleGuardar = () => {
    setDoctor({ ...doctor, telefono: telefono });
    setEditando(false);
    alert('Teléfono actualizado correctamente');
  };

  if (!doctor) return <div>Cargando perfil...</div>;

  return (
    <div className="perfil-container">
      <h1 className="perfil-title">Mi Perfil Profesional</h1>
      
      <div className="perfil-card">
        <div className="perfil-header">
          <div className="perfil-avatar">
            {doctor.nombre.charAt(4)} 
          </div>
          <div>
            <h2 className="perfil-nombre">{doctor.nombre}</h2>
            <p className="perfil-especialidad">{doctor.especialidad}</p>
          </div>
        </div>

        <hr className="perfil-divider" />

        <h3 className="section-title">Identidad Profesional</h3>
        
        <div className="perfil-grid">
          <div className="campo-info">
            <label>Cédula Profesional</label>
            <p>{doctor.cedula}</p>
          </div>

          <div className="campo-info">
            <label>Institución</label>
            <p>{doctor.institucion}</p>
          </div>

          <div className="campo-info full-width">
            <label>Domicilio del Consultorio</label>
            <p>{doctor.domicilio}</p>
          </div>

          <div className="campo-info">
            <label>Teléfono de Contacto</label>
            
            {editando ? (
              <div className="edit-controls">
                <input 
                  type="tel" 
                  className="input-edit"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
                <button onClick={handleGuardar} className="btn-save">Guardar</button>
                <button onClick={() => setEditando(false)} className="btn-cancel">Cancelar</button>
              </div>
            ) : (
              <div className="view-controls">
                <p>{telefono}</p>
                <button 
                  onClick={() => setEditando(true)} 
                  className="btn-edit"
                  title="Editar teléfono"
                >
                  ✏️ Editar
                </button>
              </div>
            )}
          </div>

          <div className="campo-info">
            <label>Email</label>
            <p>{doctor.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;