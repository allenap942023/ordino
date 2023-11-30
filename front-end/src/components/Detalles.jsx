import  { useState ,useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Detalles = () => {
  const URLBackEnd = "http://localhost:3000/api";
  const [formData, setFormData] = useState({
    nombre: 'Juan Pérez',
    fecha_nacimiento: '1990-01-01',
    dui_paciente: '12345678-9',
    sexo_paciente: 'Masculino',
    direccion: '123 Calle Principal, Ciudad, País',
    numero_telefonico: '1234-5678',
    correo: 'juan.perez@example.com',
    contacto_emergencia: {
        nombre_contacto: 'María López',
        numero_telefonico_contacto: '8765-4321',
        direccion_contacto: '456 Calle Secundaria, Ciudad, País',
        correo_contacto: 'maria.lopez@example.com'
    },
    antecedentes: 'Ninguno'
  });
  let { id } = useParams();

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

  
  useEffect(() => {
      obtenerInfoUsuario();
  }, []);

  const obtenerInfoUsuario = () => {
      
      var token = window.localStorage.getItem("token");

      axios
          .get(`${URLBackEnd}/pacientes/${id}`, {
              headers: {
                  Authorization: `Bearer  ${token}`,
              },
          })
          .then((res) => {
              var datosRecibidos = res.data;
              console.log(datosRecibidos);
              setFormData(datosRecibidos);
          })
          .catch((error) => {
              console.log(error);
          });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-5">Información Personal</h2>

      <div className="formulario">
  {/* Nombre Completo */}
  <div className="mb-4">
    <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
           type="text" 
           name="nombre" 
           placeholder="Nombre Completo" 
           onChange={handleChange} 
           value={formData.nombre} />
  </div>

  {/* Fecha de Nacimiento */}
  <div className="mb-4">
    <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
           type="date" 
           name="fecha_nacimiento" 
           onChange={handleChange} 
           value={formData.fecha_nacimiento} />
  </div>

  {/* DUI */}
  <div className="mb-4">
    <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
           type="text" 
           name="dui_paciente" 
           placeholder="DUI" 
           onChange={handleChange} 
           value={formData.dui_paciente} />
  </div>

  {/* Sexo */}
  <div className="mb-4">
    <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="sexo_paciente" 
            onChange={handleChange} 
            value={formData.sexo_paciente}>
      <option value="">Seleccione el Sexo</option>
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
    </select>
  </div>

  {/* Dirección */}
  <div className="mb-4">
    <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
           type="text" 
           name="direccion" 
           placeholder="Dirección" 
           onChange={handleChange} 
           value={formData.direccion} />
  </div>

  {/* Teléfono */}
  <div className="mb-4">
    <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
           type="tel" 
           name="numero_telefonico" 
           placeholder="Teléfono" 
           onChange={handleChange} 
           value={formData.numero_telefonico} />
  </div>

  {/* Email */}
  <div className="mb-4">
    <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
           type="email" 
           name="correo" 
           placeholder="Email" 
           onChange={handleChange} 
           value={formData.correo} />
  </div>

  <div className="mb-4">
    <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="antecedentes" 
              placeholder="Antecedentes Personales" 
              onChange={handleChange} 
              value={formData.antecedentes} />
  </div>
</div>


      
      

      {/* Campos para el contacto de emergencia */}
      <h2 className="text-lg font-semibold mb-5 mt-6">Contacto de Emergencia</h2>
      {/* Repetir el bloque de input para los campos del contacto de emergencia */}

      {/* Campo de antecedentes personales */}
      <h2 className="text-lg font-semibold mb-5 mt-6">Antecedentes Personales</h2>
      <div className="mb-4">
        <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="nombre_contacto"
                  placeholder="nombre_contacto"
                  onChange={handleChange}
                  value={formData.contacto_emergencia &&formData.contacto_emergencia.nombre_contacto}></textarea>
      </div>

      <div className="mb-4">
        <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="numero_telefonico_contacto"
                  placeholder="Antecedentes numero_telefonico_contacto"
                  onChange={handleChange}
                  value={formData.contacto_emergencia&& formData.contacto_emergencia.numero_telefonico_contacto}></textarea>
      </div>

      <div className="mb-4">
        <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="direccion_contacto"
                  placeholder="direccion_contacto Personales"
                  onChange={handleChange}
                  value={formData.contacto_emergencia&&formData.contacto_emergencia.direccion_contacto}></textarea>
      </div>


      <div className="mb-4">
        <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="correo_contacto"
                  placeholder="correo_contacto Personales"
                  onChange={handleChange}
                  value={formData.contacto_emergencia&& formData.contacto_emergencia.correo_contacto}></textarea>
      </div>

      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Enviar
      </button>
    </form>
  );
};

export default Detalles;
