import React from 'react';
import { useParams } from 'react-router-dom';
const HistorialMedico = () => {
  let { id } = useParams();
  return (
    <div id="Principal" className="flex-1 flex flex-col overflow-hidden bg-blue-800 ml-72 mr-4 mt-8">
      <h1>Historial Médico</h1>
      {id}
      {/* Contenido del componente HistorialMedico */}
    </div>
  );
};

export default HistorialMedico;
