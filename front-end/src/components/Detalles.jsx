
import React, { useState } from 'react';
const URLBackEnd = "http://localhost:3000/api";

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
    if (name.startsWith("contactoEmergencia.")) {
      setFormData({
        ...formData,
        contactoEmergencia: {
          ...formData.contactoEmergencia,
          [name.split('.')[1]]: value
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
    <form onSubmit={handleSubmit} className="p-4 max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-semibold mb-6">Información Personal</h2>
      <div className="mb-4">
        {/* Nombre Completo */}
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreCompleto">
          Nombre Completo
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               id="nombreCompleto" 
               type="text" 
               name="nombreCompleto"
               placeholder="Nombre Completo" 
               onChange={handleChange} 
               value={formData.nombreCompleto} />
      </div>

      {/* Repite este bloque para los campos restantes: fechaNacimiento, dui, sexo, direccion, telefono, email */}

      <h2 className="text-xl font-semibold mb-6 mt-8">Contacto de Emergencia</h2>
      {/* Campos para el contacto de emergencia (nombreCompleto, telefono, direccion, email) */}

      <h2 className="text-xl font-semibold mb-6 mt-8">Antecedentes Personales</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="antecedentesPersonales">
          Antecedentes Personales
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="antecedentesPersonales" 
                  name="antecedentesPersonales"
                  placeholder="Antecedentes Personales" 
                  onChange={handleChange} 
                  value={formData.antecedentesPersonales}></textarea>
      </div>

      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Detalles;

