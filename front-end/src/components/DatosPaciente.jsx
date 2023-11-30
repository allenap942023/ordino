import  { useState, useEffect } from "react";
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 pb-4 w-full">
            
            <div className="flex flex-row">
                <span>Nombre paciente</span>
                <span>{paciente.nombre}</span>
            </div>
            <div className="flex flex-row">
                <span>Fecha de nacimiento</span>
                <span>{paciente.fecha_nacimiento}</span>
            </div>
            <div className="flex flex-row">
                <span>Dui</span>
                <span>{paciente.dui_paciente}</span>
            </div>
            <div className="flex flex-row">
                <span>Sexo</span>
                <span>{paciente.sexo_paciente}</span>
            </div>
            <div className="flex flex-row">
                <span>Direccion</span>
                <span>{paciente.direccion}</span>
            </div>
            <div className="flex flex-row">
                <span>Numero de telefono</span>
                <span>{paciente.numero_telefonico}</span>
            </div>
            <div className="flex flex-row">
                <span>Correo electrónico</span>
                <span>{paciente.correo}</span>
            </div>

        </div>
    );
};

export default DatosPaciente;
