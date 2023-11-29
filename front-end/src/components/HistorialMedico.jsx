import  { useState ,useEffect} from 'react';
import { useParams, } from 'react-router-dom';
import axios from 'axios';
const HistorialMedico = () => {
  let { id } = useParams();
  const URLBackEnd = 'http://localhost:3000/api';
  const [historial, setHistorial] = useState(null);

  useEffect(() => {
    obtenerHistorial();
  },[])
  const obtenerHistorial = ()=>{
    var token =  window.localStorage.getItem('token');

    axios.get(`${URLBackEnd}/pacientes/${id}/historial`, {
      headers: {
        Authorization: `Bearer  ${token}`
      }
    }).then(
      (res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        setHistorial(datosRecibidos);
        console.log(historial);
      }
    ).catch((error) => {
      console.log(error);
    });
  }
  
  
  return (
    <div id="Principal" className="flex-1 flex flex-col overflow-hidden bg-blue-800 ml-72 mr-4 mt-8">
      <h1>Historial Médico</h1>
      {id}
      {/* Contenido del componente HistorialMedico */}
    </div>
  );
};

export default HistorialMedico;
