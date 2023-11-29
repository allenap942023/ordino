import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaNotesMedical } from 'react-icons/fa';
import axios from 'axios';


const NuevoPaciente = () => {
  const URLBackEnd = 'http://localhost:3000/api';
  const [selectedOption, setSelectedOption] = useState(null);
  const [listaPacientes, setListaPacientes] = useState([]);

  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const obtenerPacientes = (event) => {
    event.preventDefault();
    var token =  window.localStorage.getItem('token');
    var nombre = event.target.nombre.value;
    axios.get(`${URLBackEnd}/pacientes?nombre=${nombre}`, {
      headers: {
        Authorization: `Bearer  ${token}`
      }
    }).then(
      (res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        setListaPacientes(datosRecibidos);
      }
    ).catch((error) => {
      console.log(error);
    });
  };

  return (

    <div className="flex h-screen "> {/* aqui le quite: h-screen pero pueda que lo regrese */}
      {/* Contenido del Sidebar */}
      <Sidebar onOptionClick={handleOptionClick} />

      {/* Contenido principal del Dashboard */}
      <section id="Principal" className="flex-1 flex flex-col overflow-hidden items-start bg-white text-black shadow-2xl rounded-lg md:ml-72 md:mr-4 md:mt-8">
        <div className="flex items-center mx-auto w-5/6 m-10">
  <FaNotesMedical className="mr-2" size={20} /> {/* Icono de expedientes médicos */}
  <p className="text-lg font-medium">Busca a tus pacientes ingresando su nombre:</p>
</div>


        <div className="flex flex-col items-center mx-auto w-5/6">
        <form className="w-full mx-auto" onSubmit={obtenerPacientes}>
          <div className="w-full mx-auto flex items-center bg-white rounded-md border border-gray-300 p-4 m-5">
         

            <div className="mr-4">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-5.2-5.2M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                />
              </svg>
             
            </div>
            
            <input
              type="text"
              placeholder="Escriba el nombre del paciente"
              name='nombre'
              className="flex-1 px-2 text-xl outline-none"
            />
           
            
          </div>

          </form>
          <div div className="overflow-x-auto w-full m-5">
            <h2 className="text-lg font-medium mb-2">Coincidencias encontradas</h2>

            <div className='mt-10' >
              <table className="w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden ">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left lg:w-1/4">Nombre completo</th>
                    <th className="py-3 px-6 text-left lg:w-1/4">Opción 1</th>
                    <th className="py-3 px-6 text-left lg:w-1/4">Opción 2</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {
                    listaPacientes.map((paciente)=>{


                      return <>
                    <tr className="bg-gray-300">
                    <td className="font-medium py-4 px-6 lg:w-1/4">{paciente.nombre}</td>
                    <td className="py-4 px-6 lg:w-1/4">
                      <a href={'/dashboard/medical-history/'+paciente._id} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300">Historial médico</a>
                    </td>
                    <td className="py-4 px-6 lg:w-1/4">
                      <a href={'/dashboard/new-consultation/'+paciente._id} className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md focus:ring-4 focus:ring-green-300 focus:outline-none transition duration-300">Nueva consulta</a>
                    </td>
                  </tr>
                  </>
                    })
                  
                  
                  }
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </section>



    </div >
  );
};

export default NuevoPaciente;
