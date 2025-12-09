import React from 'react';
import StatCard from '../components/statCard';
import CalendarWidget from '../components/calendarWidget';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1>Bienvenido, Dr. Mario</h1>
        <p>Resumen de actividades del día</p>
      </header>

      <div className="dashboard__grid">
        <StatCard title="Pacientes Totales" value="124" icon="👥" />
        <StatCard title="Citas Hoy" value="8" icon="📅" />
        <StatCard title="Pendientes" value="3" icon="⚠️" />
      </div>

      <div className="dashboard__content-grid">
        
        <div className="dashboard__section">
          <h2>Próximas Citas</h2>
          <div className="cita-preview">
            <p>09:00 AM - <strong>Ana García</strong> (Consulta General)</p>
          </div>
          <div className="cita-preview">
             <p>10:30 AM - <strong>Carlos López</strong> (Revisión)</p>
          </div>
          <div className="cita-preview">
             <p>12:00 PM - <strong>Maria Rodriguez</strong> (Terapia)</p>
          </div>
        </div>

        <div>
           <CalendarWidget />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;