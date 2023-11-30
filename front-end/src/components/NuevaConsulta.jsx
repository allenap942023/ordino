import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DatosPaciente from "./DatosPaciente";
import { useParams } from "react-router-dom";
import axios from "axios";
const NuevaConsulta = () => {
  const URLBackEnd = 'http://localhost:3000/api';
  let { id } = useParams();
  const inputNames = [
    'Fecha Cita',
    'Fecha Próxima Cita',
    'Motivo',
    'Presión Arterial',
    'Ritmo Cardiaco',
    'Temperatura',
    'Oxígeno',
    'Síntomas',
    'Diagnóstico',
    'Tratamiento',
    'Notas'
  ];

  const [formValues, setFormValues] = useState(
    inputNames.reduce((acc, name) => ({ ...acc, [name]: '' }), {})
  );

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form values from the formValues object
    console.log('Form Values:', formValues);
    var idUser =  window.localStorage.getItem('_id');
    var token =  window.localStorage.getItem('token');
    var data = {
    id_paciente: id,
    id_medico: idUser,
    fecha_cita:formValues['Fecha Cita'],
    fecha_proxima_cita:formValues['Fecha Próxima Cita'],
    motivo:formValues['Motivo'],
    presion_arterial:formValues['Presión Arterial'],
    ritmo_cardiaco:formValues['Ritmo Cardiaco'],
    temperatura:formValues['Temperatura'],
    oxigeno:formValues['Oxígeno'],
    sintomas:formValues['Síntomas'],
    diagnostico:formValues['Diagnóstico'],
    tratamiento:formValues['Tratamiento'],
    notas:formValues['Notas']
    };
    axios.post(`${URLBackEnd}/pacientes/${id}/nueva_cita`,data,{
    headers: {
      Authorization: `Bearer  ${token}`
    }}).then(
      (res)=>{
          var datosRecibidos  = res.data;
          console.log(datosRecibidos);
          // window.location.replace("/dashboard");
          
          // window.localStorage.getItem(key);
  
      }
   ).catch((error)=>{
  
      // setErrorMessage(error.response.data.mensaje);  
      console.log(error);
   });
  };

  return (
    <div className="flex">
      {/* Contenido del Sidebar */}
      <Sidebar />
      {/* {id} */}
      {/* Contenido principal del Dashboard */}
      <section
        id="Principal"
        className="flex-1 flex flex-col overflow-hidden justify-center items-center bg-white text-black rounded-lg md:ml-72 md:mr-4 md:mt-8"
      >
        <DatosPaciente id_paciente={id}/>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 pb-4  w-full">

        
          <div
            className="flex flex-col items-center pa-8 space-y-6 bg-white text-black shadow-lg rounded-lg p-4 transition-transform transform-gpu hover:shadow-2xl"
            style={{
              border: "2px solid #1550ab", // Color del borde
            }}
          >
            <label
              htmlFor="emergency_full_name"
              className="text-lg font-bold text-gray-700"
            >
              Registrar nueva cita
            </label>
            
            <form
              onSubmit={handleSubmit}
              className="space-y-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center"
            >

              {/* Map over inputNames to generate labels and input fields */}
              {inputNames.map((name) => (
                <div key={name} className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                  <label htmlFor={name} className="ml-2 text-lg font-medium text-gray-700">
                    {name}:
                  </label>
                  {name === 'Fecha Cita' || name === 'Fecha Próxima Cita' ? (
                    <input
                      type="date"
                      id={name}
                      value={formValues[name]}
                      onChange={(e) => handleInputChange(name, e.target.value)}
                      required
                      className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  ) : (
                    <textarea
                      id={name}
                      value={formValues[name]}
                      onChange={(e) => handleInputChange(name, e.target.value)}
                      required={name !== 'Oxígeno'}
                      maxLength={300}
                      className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  )}
                </div>
              ))}
              <div className="flex items-center space-x-4 lg:mb-16">
                <p className="text-gray-900 font-medium">
                  ¿Todo listo? Entonces clickea en:
                </p>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                  Registrar Cita Médica
                </button>
              </div>

            </form>
          </div>


        </div>
      </section>
    </div>
  );
};

export default NuevaConsulta;
