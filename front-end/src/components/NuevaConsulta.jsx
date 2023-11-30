import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfilePictureUploader from "../components/ProfilePictureUploader"; // Ajusta la ruta según la ubicación del componente
import { useParams } from "react-router-dom";

const NuevaConsulta = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  let { id } = useParams();
  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleProfilePictureUpload = (file) => {
    // Aquí puedes manejar la lógica de subida del archivo, como almacenarlo en el estado del componente o enviarlo a un servidor
    console.log("Archivo subido:", file);
  };

  const [fechaCita, setFechaCita] = useState('');
  const [fechaProximaCita, setFechaProximaCita] = useState('');
  const [motivo, setMotivo] = useState('');
  const [presionArterial, setPresionArterial] = useState('');
  const [ritmoCardiaco, setRitmoCardiaco] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [oxigeno, setOxigeno] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [tratamiento, setTratamiento] = useState('');
  const [notas, setNotas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const citaMedica = {
      fecha_cita: fechaCita,
      fecha_proxima_cita: fechaProximaCita,
      motivo,
      presion_arterial: presionArterial,
      ritmo_cardiaco: ritmoCardiaco,
      temperatura,
      oxigeno,
      sintomas,
      diagnostico,
      tratamiento,
      notas,
    };
  }

  return (
    <div className="flex ">
      {" "}
      {/* aqui le quite: h-screen pero pueda que lo regrese */}
      {/* Contenido del Sidebar */}
      <Sidebar onOptionClick={handleOptionClick} />
      {id}
      {/* Contenido principal del Dashboard */}
      <section
        id="Principal"
        className="flex-1 flex flex-col overflow-hidden justify-center items-center bg-white text-black shadow-2xl rounded-lg md:ml-72 md:mr-4 md:mt-8"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
          {/*           Formulario 1: Informacion del paciente */}
          <div
            className="flex flex-col items-center space-y-6 bg-white text-black shadow-lg rounded-lg p-4 transition-transform transform-gpu hover:shadow-2xl"
            style={{
              border: "2px solid #1550ab", // Color del borde
            }}
          >
            <label
              htmlFor="emergency_full_name"
              className="text-lg font-bold text-gray-700"
            >
              Contacto de emergencia:
            </label>

            <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center">
              {/* Contenido del formulario */}

              <input
                type="date"
                value={fechaCita}
                onChange={(e) => setFechaCita(e.target.value)}
                required
              />
              <input
                type="date"
                value={fechaProximaCita}
                onChange={(e) => setFechaProximaCita(e.target.value)}
              />
              <textarea
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                required
                maxLength={300}
              />
              <input
                type="text"
                value={presionArterial}
                onChange={(e) => setPresionArterial(e.target.value)}
                required
                maxLength={7}
              />
              <input
                type="number"
                value={ritmoCardiaco}
                onChange={(e) => setRitmoCardiaco(e.target.value)}
                required
                max={999}
              />
              <input
                type="number"
                value={temperatura}
                onChange={(e) => setTemperatura(e.target.value)}
                required
                max={999}
              />
              <input
                type="number"
                value={oxigeno}
                onChange={(e) => setOxigeno(e.target.value)}
                max={999}
              />
              <textarea
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
                required
                maxLength={300}
              />
              <textarea
                value={diagnostico}
                onChange={(e) => setDiagnostico(e.target.value)}
                required
                maxLength={300}
              />
              <textarea
                value={tratamiento}
                onChange={(e) => setTratamiento(e.target.value)}
                required
                maxLength={300}
              />
              <textarea
                value={notas}
                onChange={(e) => setNotas(e.target.value)}
                required
                maxLength={300}
              />
              <button type="submit">Registrar Cita Médica</button>
            </form>
          </div>

          <div className="flex items-center space-x-4 lg:mb-16">
            <p className="text-gray-900 font-medium">
              ¿Todo listo? Entonces clickea en:
            </p>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Guardar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuevaConsulta;
