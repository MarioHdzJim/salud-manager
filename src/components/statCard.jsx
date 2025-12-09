import React from 'react';
import './statCard.css';

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-card__info">
        <h3 className="stat-card__title">{title}</h3>
        <p className="stat-card__value">{value}</p>
      </div>
      <div className="stat-card__icon">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;