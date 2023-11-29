// Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-screen">
      {/* Contenido del Sidebar */}
      <Sidebar onOptionClick={handleOptionClick} />

      {/* Contenido principal del Dashboard */}
      <div id="Principal" className="flex-1 flex flex-col overflow-hidden bg-blue-800 md:ml-72 md:mr-4 md:mt-8"> {/* Añadí md: para hacer las clases responsivas */}        {/* Renderiza el componente correspondiente según la opción seleccionada */}
        
      </div>
    </div>
  );
};

export default Dashboard;
