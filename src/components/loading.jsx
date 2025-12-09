import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Cargando datos...</p>
    </div>
  );
};

export default Loading;