import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProfilePictureUploader from '../components/ProfilePictureUploader'; // Ajusta la ruta según la ubicación del componente
import { useParams } from 'react-router-dom';


const NuevoPaciente = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  let { id } = useParams();
  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleProfilePictureUpload = (file) => {
    // Aquí puedes manejar la lógica de subida del archivo, como almacenarlo en el estado del componente o enviarlo a un servidor
    console.log('Archivo subido:', file);
  };


  return (

    <div className="flex "> {/* aqui le quite: h-screen pero pueda que lo regrese */}
      {/* Contenido del Sidebar */}
      <Sidebar onOptionClick={handleOptionClick} />
      {id}
      {/* Contenido principal del Dashboard */}
      <section id="Principal" className="flex-1 flex flex-col overflow-hidden justify-center items-center bg-white text-black shadow-2xl rounded-lg md:ml-72 md:mr-4 md:mt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
          {/*           Formulario 1: Informacion del paciente */}
          <div className='flex flex-col items-center space-y-6 bg-white text-black shadow-lg rounded-lg p-4 transition-transform transform-gpu hover:shadow-2xl'
            style={{
              border: "2px solid #1550ab", // Color del borde
            }}
          >
            <label htmlFor="emergency_full_name" className="text-lg font-bold text-gray-700">Contacto de emergencia:</label>

            <form className="space-y-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center">
              {/* Contenido del formulario */}

              <div className="grid grid-cols-1 justify-center items-center text-center">
                
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              <label htmlFor="personal_history" className="text-lg font-medium text-gray-700">Antecedentes personales:</label>
              <textarea
                id="personal_history"
                name="personal_history"
                rows="3"
                className="p-2 mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              ></textarea>
            </div>

              </div>


              <div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="full_name" className="text-lg font-medium text-gray-700">Nombre Completo:</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="date_of_birth" className="text-lg font-medium text-gray-700">Fecha de nacimiento:</label>
                  <input
                    type="date"
                    id="date_of_birth"
                    name="date_of_birth"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="id" className="text-lg font-medium text-gray-700">DUI:</label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="gender" className="text-lg font-medium text-gray-700">Sexo:</label>
                  <select
                    id="gender"
                    name="gender"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="address" className="text-lg font-medium text-gray-700">Dirección:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="phone_number" className="text-lg font-medium text-gray-700">Número de teléfono:</label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="email" className="text-lg font-medium text-gray-700">Correo electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
            </form>
          </div>


          {/*           Formulario2: Datos de contacto de emergencia*/}
          <div className='flex flex-col items-center space-y-6 bg-white text-black shadow-lg rounded-lg p-4 transition-transform transform-gpu hover:shadow-2xl
          '
            style={{
              border: "2px solid #1550ab", // Color del borde
            }}>
            <label htmlFor="emergency_full_name" className="text-lg font-bold text-gray-700">Contacto de emergencia:</label>

            <form
              className="space-y-6 p-4 "

            >
              {/* Columna 1 */}
              <div id="columna1" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="emergency_full_name" className="text-lg font-medium text-gray-700">Nombre Completo:</label>
                  <input
                    type="text"
                    id="emergency_full_name"
                    name="emergency_full_name"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="lg:ml-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="emergency_phone_number" className="text-lg font-medium text-gray-700">Número de teléfono:</label>
                  <input
                    type="tel"
                    id="emergency_phone_number"
                    name="emergency_phone_number"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              {/* Columna 2 */}
              <div id="columna2" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="emergency_address" className="text-lg font-medium text-gray-700">Dirección:</label>
                  <input
                    type="text"
                    id="emergency_address"
                    name="emergency_address"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="lg:ml-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor="emergency_email" className="text-lg font-medium text-gray-700">Correo electrónico:</label>
                  <input
                    type="email"
                    id="emergency_email"
                    name="emergency_email"
                    className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
            </form>
          </div>

          {/*             Formulario 3: Historial personal
 */}
          <form
            className="space-y-6 bg-white text-black shadow-lg rounded-lg p-4 transition-transform transform-gpu hover:shadow-2xl"
            style={{
              border: "2px solid #1550ab", // Color del borde
            }}
          >



            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              <label htmlFor="personal_history" className="text-lg font-medium text-gray-700">Antecedentes personales:</label>
              <textarea
                id="personal_history"
                name="personal_history"
                rows="3"
                className="p-2 mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              ></textarea>
            </div>
          </form>


          <div className="flex items-center space-x-4 lg:mb-16">
            <p className="text-gray-900 font-medium" >¿Todo listo? Entonces clickea en:</p>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Guardar
            </button>
          </div>

        </div>

      </section >



    </div >
  );
};

export default NuevoPaciente;
