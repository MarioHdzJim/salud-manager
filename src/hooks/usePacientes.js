import { useState, useEffect } from 'react';
import pacientesData from '../data/data.json';

export const usePacientes = () => {
  
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const obtenerDatos = () => {
      setTimeout(() => {
        setPacientes(pacientesData);
        console.log("Datos cargados correctamente");
      }, 500);
    };

    obtenerDatos();
  }, []);
  return { pacientes };
};