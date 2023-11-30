import { useState, useEffect } from "react";
import axios from "axios";
const URLBackEnd = "http://localhost:3000/api";

const DatosPaciente = (props) => {
  const [paciente, setPaciente] = useState({});
  useEffect(() => {
    obtenerInfoUsuario();
  }, [paciente]);

  const obtenerInfoUsuario = () => {
    var id = props.id_paciente;
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
        setPaciente(datosRecibidos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-evenly shadow-md p-4 rounded-3xl m-3 min-w-[500px] lg:min-w-[900px] font-inter">
      <div className="lg:w-[300px] flex justify-start">
        <img
          src=""
          alt=""
          className="rounded-full border border-slate-800 w-[120px] h-[120px] shadow-md"
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <span className="font-bold text-xs">Nombre paciente:</span>
        <span className="text-xs">{paciente.nombre}</span>
        <span className="font-bold text-xs">Fecha de nacimiento:</span>
        <span className="text-xs">{paciente.fecha_nacimiento}</span>
        <span className="font-bold text-xs">Sexo:</span>
        <span className="text-xs">{paciente.sexo_paciente}</span>
        <span className="font-bold text-xs">Dui</span>
        <span className="text-xs">{paciente.dui_paciente}</span>
        <span className="font-bold text-xs">Direccion</span>
        <span className="text-xs">{paciente.direccion}</span>
        <span className="font-bold text-xs">Numero de telefono</span>
        <span className="text-xs">{paciente.numero_telefonico}</span>
        <span className="font-bold text-xs">Correo electrónico</span>
        <span className="text-xs">{paciente.correo}</span>
      </div>
    </div>
  );
};

export default DatosPaciente;
