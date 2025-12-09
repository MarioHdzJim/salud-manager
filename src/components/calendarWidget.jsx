import React from 'react';
import './calendarWidget.css';

const CalendarWidget = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <h4>Noviembre 2025</h4>
        <div className="calendar-nav">
          <span>‹</span>
          <span>›</span>
        </div>
      </div>
      
      <div className="calendar-grid">
        <div className="day-name">Lu</div>
        <div className="day-name">Ma</div>
        <div className="day-name">Mi</div>
        <div className="day-name">Ju</div>
        <div className="day-name">Vi</div>
        <div className="day-name">Sa</div>
        <div className="day-name">Do</div>
        <div className="day-empty"></div>
        <div className="day-empty"></div>

        {days.map(day => (
          <div key={day} className={`day-number ${day === 24 ? 'active' : ''}`}>
            {day}
          </div>
        ))}
      </div>
      <button className="calendar-btn">Agendar Nueva Cita</button>
    </div>
  );
};

export default CalendarWidget;