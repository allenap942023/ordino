import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaNotesMedical } from "react-icons/fa";
import axios from "axios";
import moment from "moment";

const HistorialMedico = () => {
  let { id } = useParams();
  const URLBackEnd = 'http://localhost:3000/api';
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    obtenerHistorial();
  }, [])
  const obtenerHistorial = (event) => {
    var token = window.localStorage.getItem('token');
    var fechaFin = null;
    var fechaInicio = null;
    if (event) {
      event.preventDefault();
      fechaInicio = event.target.fechaInicio.value;
      fechaFin = event.target.fechaFin.value;
    }
    axios.get(`${URLBackEnd}/pacientes/${id}/historial?fechaFin=${fechaFin}&fechaInicio=${fechaInicio}`, {
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

  const [selectedOption, setSelectedOption] = useState(null);
  const [listaPacientes, setListaPacientes] = useState([]);

  // Función para manejar el clic en las opciones del sidebar
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };



  return (
    <div className="flex h-screen ">
      {" "}
      {/* aqui le quite: h-screen pero pueda que lo regrese */}
      {/* Contenido del Sidebar */}
      <Sidebar onOptionClick={handleOptionClick} />
      {/* Contenido principal del Dashboard */}
      <section
        id="Principal"
        className="flex-1 flex flex-col overflow-hidden items-start rounded-lg md:ml-72 md:mr-4 md:mt-8 font-inter"
      >
        <div className="flex items-center mx-auto w-5/6 mt-10">
          <FaNotesMedical className="mr-2" size={20} />{" "}
          {/* Icono de expedientes médicos */}
          <p className="text-lg text-sm">
            Listado de consultas:
          </p>
        </div>

        <div className="flex flex-col items-center mx-auto w-5/6">
          <form className="w-full mx-auto flex flex-row" onSubmit={obtenerHistorial}>
            <div className="w-1/2 mx-auto flex items-center bg-white rounded-xl border border-gray-300 p-2 m-5">
              <div className="mr-4">

              </div>

              <input
                type="date"
                placeholder="Escriba el nombre del paciente"
                name="fechaInicio"
                className="flex-1 px-2 text-xs outline-none bg-transparent"
              />
            </div>
            <div className="w-1/2 mx-auto flex items-center bg-white rounded-xl border border-gray-300 p-2 m-5">
              <div className="mr-4">

              </div>

              <input
                type="date"
                placeholder="Escriba el nombre del paciente"
                name="fechaFin"
                className="flex-1 px-2 text-xs outline-none bg-transparent"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium  px-3 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none"> <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
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
            </svg></button>
          </form>
          {historial.length > 0 ? (
            <div className="overflow-x-auto w-full m-5">
              <h2 className="text-sm">
                Coincidencias encontradas
              </h2>

              <div className="mt-5">
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-800">

                  <table className="w-full shadow-md rounded-md">
                    <thead className="bg-slate-800 text-neutral-100 text-xs">

                      <tr>
                        {/* <th className="py-3 px-6 text-left lg:w-1/6 border-r-2 border-r-slate-700">
        Nombre
      </th> */}
                        <th className="py-3 px-6 text-left lg:w-1/6 border-r-2 border-r-slate-700">
                          Número de Cita
                        </th>
                        <th className="py-3 px-6 lg:w-1/12 text-center border-r-slate-700">
                          Día
                        </th>
                        <th className="py-3 px-6 lg:w-1/12 text-center border-r-slate-700">
                          Mes
                        </th>
                        <th className="py-3 px-6 lg:w-1/12 text-center border-r-slate-700">
                          Año
                        </th>
                        <th className="py-3 px-6 lg:w-1/4 text-center border-r-slate-700">
                          Diagnóstico
                        </th>
                        <th className="py-3 px-6 lg:w-1/6 text-center">
                          Acción
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-800">
                      {/* Ejemplo de datos de citas */}
                      {historial.map((item, index) => {
                        return <>
                          <tr className="bg-white hover:bg-slate-100">
                            {/* <td className="py-4 px-6 lg:w-1/6 text-xs border-r-2">
        Juan Pérez
      </td> */}
                            <td className="py-4 px-6 lg:w-1/6 text-xs border-r-2">
                              {index+1}
                            </td>
                            <td className="py-4 px-6 lg:w-1/12 text-center border-r-2">
                              {moment(item.fecha_cita).day()}
                            </td>
                            <td className="py-4 px-6 lg:w-1/12 text-center border-r-2">
                              {moment(item.fecha_cita).month()}
                            </td>
                            <td className="py-4 px-6 lg:w-1/12 text-center border-r-2">
                              {moment(item.fecha_cita).year()}
                            </td>
                            <td className="py-4 px-6 lg:w-1/4 text-center border-r-2">
                              {item.diagnostico}
                            </td>
                            <td className="py-4 px-6 lg:w-1/6 text-center">
                              <a
                              href={"/dashboard/consultation/"+id+"/"+item._id}
                                className="bg-blue-800 text-white py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300"
                              >
                                Ver
                              </a>
                            </td>
                          </tr>
                        </>
                      })
                      }
                      {/* Más filas de citas aquí */}
                    </tbody>
                  </table>



                </div>
              </div>
            </div>
          ) : (
            <div className="mt-10 bg-slate-100 shadow rounded-md p-2 text-xs">
              Por favor ingresar un nombre válido
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HistorialMedico;

