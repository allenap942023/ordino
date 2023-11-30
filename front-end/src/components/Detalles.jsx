import React, { useState } from 'react';

const Detalles = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: 'Juan Pérez',
    fechaNacimiento: '1990-01-01',
    dui: '12345678-9',
    sexo: 'Masculino',
    direccion: '123 Calle Principal, Ciudad, País',
    telefono: '1234-5678',
    email: 'juan.perez@example.com',
    contactoEmergencia: {
      nombreCompleto: 'María López',
      telefono: '8765-4321',
      direccion: '456 Calle Secundaria, Ciudad, País',
      email: 'maria.lopez@example.com'
    },
    antecedentesPersonales: 'Ninguno'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('contactoEmergencia.')) {
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        contactoEmergencia: {
          ...formData.contactoEmergencia,
          [field]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-5">Información Personal</h2>
      {/* Campos de información personal */}
      {/* Repetir el siguiente bloque para cada campo, cambiando el name y placeholder según corresponda */}
      <div className="mb-4">
        <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
               type="text" 
               name="nombreCompleto" 
               placeholder="Nombre Completo" 
               onChange={handleChange} 
               value={formData.nombreCompleto} />
      </div>

      {/* Campos para el contacto de emergencia */}
      <h2 className="text-lg font-semibold mb-5 mt-6">Contacto de Emergencia</h2>
      {/* Repetir el bloque de input para los campos del contacto de emergencia */}

      {/* Campo de antecedentes personales */}
      <h2 className="text-lg font-semibold mb-5 mt-6">Antecedentes Personales</h2>
      <div className="mb-4">
        <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="antecedentesPersonales"
                  placeholder="Antecedentes Personales"
                  onChange={handleChange}
                  value={formData.antecedentesPersonales}></textarea>
      </div>

      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Enviar
      </button>
    </form>
  );
};

export default Detalles;
