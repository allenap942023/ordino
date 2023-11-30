import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DatosPaciente from "./DatosPaciente";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa";
const NuevaConsulta = () => {
  const URLBackEnd = "http://localhost:3000/api";
  let { id } = useParams();
  const inputNames = [
    "Fecha Cita",
    "Fecha Próxima Cita",
    "Motivo",
    "Presión Arterial",
    "Ritmo Cardiaco",
    "Temperatura",
    "Oxígeno",
    "Síntomas",
    "Diagnóstico",
    "Tratamiento",
    "Notas",
  ];

  const [formValues, setFormValues] = useState(
    inputNames.reduce((acc, name) => ({ ...acc, [name]: "" }), {})
  );

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form values from the formValues object
    console.log("Form Values:", formValues);
    var idUser = window.localStorage.getItem("_id");
    var token = window.localStorage.getItem("token");
    var data = {
      id_paciente: id,
      id_medico: idUser,
      fecha_cita: formValues["Fecha Cita"],
      fecha_proxima_cita: formValues["Fecha Próxima Cita"],
      motivo: formValues["Motivo"],
      presion_arterial: formValues["Presión Arterial"],
      ritmo_cardiaco: formValues["Ritmo Cardiaco"],
      temperatura: formValues["Temperatura"],
      oxigeno: formValues["Oxígeno"],
      sintomas: formValues["Síntomas"],
      diagnostico: formValues["Diagnóstico"],
      tratamiento: formValues["Tratamiento"],
      notas: formValues["Notas"],
    };
    axios
      .post(`${URLBackEnd}/pacientes/${id}/nueva_cita`, data, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        // window.location.replace("/dashboard");

        // window.localStorage.getItem(key);
      })
      .catch((error) => {
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
        className="flex-1 flex flex-col overflow-hidden justify-center items-center bg-slate-100 text-black rounded-lg sm:ml-[180px]"
      >
        <DatosPaciente id_paciente={id} />
        <div className="grid snap-none grid-cols-1 gap-6 md:grid-cols-1  w-full">
          <div
            className="flex flex-col items-center pa-8 space-y-6  text-black shadow-lg rounded-lg p-4 transition-transform transform-gpu hover:shadow-2x "
            style={
              {
                // Color del borde
              }
            }
          >
            <label
              htmlFor="emergency_full_name"
              className="text-lg font-bold text-gray-700"
            >
              Registrar nueva cita
            </label>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 items-center justify-center"
            >
              <div className="grid snap-none grid-cols-2 md:grid-cols-3 w-full gap-5">
                <div className="col-span-2 w-full ">
                  <div className="grid snap-none grid-cols-2 text-xs p-3 shadow-md rounded-2xl w-full bg-white">
                    <div className="col-span-2 text-center font-bold my-2">
                      Historial de enfermedad actual:{" "}
                    </div>
                    <div className="font-bold col-span-2 my-2">
                      Motivo de consulta:{" "}
                    </div>
                    <textarea
                      id={"Motivo"}
                      onChange={(e) => (formValues["Motivo"] = e.target.value)}
                      required={true}
                      maxLength={300}
                      className="border border-blue-300 rounded-lg w-full p-1 col-span-2 min-h-[70px]"
                      placeholder="El paciente sufre de dolor abdominal..."
                    />
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="grid snap-none grid-cols-2 text-xs max-w-[300px] p-3 shadow-md rounded-2xl col-span-1 gap-2 bg-white">
                    <div className="col-span-2 text-center font-bold my-2">
                      Exploración física:{" "}
                    </div>
                    <div className="font-bold flex h-full items-center">
                      Presión Arterial:{" "}
                    </div>
                    <input
                      id={"Presión Arterial"}
                      onChange={(e) =>
                        (formValues["Presión Arterial"] = e.target.value)
                      }
                      required={true}
                      maxLength={300}
                      className="border border-blue-300 rounded-lg max-w-[150px] p-1"
                    />
                    <div className="font-bold flex h-full items-center">
                      Temperatura:{" "}
                    </div>
                    <input
                      id={"Temperatura"}
                      onChange={(e) =>
                        (formValues["Temperatura"] = e.target.value)
                      }
                      type="number"
                      numeric={true}
                      required={true}
                      maxLength={300}
                      className="border border-blue-300 rounded-lg max-w-[150px] p-1"
                    />
                    <div className="font-bold flex h-full items-center">
                      Ritmo Cardiaco:{" "}
                    </div>
                    <input
                      id={"Ritmo Cardiaco"}
                      onChange={(e) =>
                        (formValues["Ritmo Cardiaco"] = e.target.value)
                      }
                      type="number"
                      numeric={true}
                      required={true}
                      maxLength={300}
                      className="border border-blue-300 rounded-lg max-w-[150px] p-1"
                    />
                    <div className="font-bold flex h-full items-center">
                      Oxígeno:{" "}
                    </div>
                    <input
                      id={"Oxígeno"}
                      onChange={(e) => (formValues["Oxígeno"] = e.target.value)}
                      required={true}
                      type="number"
                      numeric={true}
                      maxLength={300}
                      className="border border-blue-300 rounded-lg max-w-[150px] p-1"
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="grid snap-none grid-cols-2 text-xs p-3 shadow-md rounded-2xl w-full gap-3 bg-white">
                    <div className="col-span-2 text-center font-bold my-2">
                      Plan de tratamiento:{" "}
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">Diagnostico: </div>
                      <textarea
                        id={"Diagnóstico"}
                        onChange={(e) =>
                          (formValues["Diagnóstico"] = e.target.value)
                        }
                        required={true}
                        maxLength={300}
                        className="border border-blue-300 rounded-lg w-full p-1 min-h-[70px]"
                        placeholder="Colitis nerviosa..."
                      />
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">Sintomas: </div>
                      <textarea
                        id={"Síntomas"}
                        onChange={(e) =>
                          (formValues["Síntomas"] = e.target.value)
                        }
                        required={true}
                        maxLength={300}
                        className="border border-blue-300 rounded-lg w-full p-1 min-h-[70px]"
                        placeholder="El paciente sufre de dolor abdominal..."
                      />
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">
                        Medicamento recetado y dosis:{" "}
                      </div>
                      <textarea
                        id={"Tratamiento"}
                        onChange={(e) =>
                          (formValues["Tratamiento"] = e.target.value)
                        }
                        required={true}
                        maxLength={300}
                        className="border border-blue-300 rounded-lg w-full p-1 min-h-[70px]"
                        placeholder="El paciente sufre de dolor abdominal..."
                      />
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">Notas médicas: </div>
                      <textarea
                        id={"Notas"}
                        onChange={(e) => (formValues["Notas"] = e.target.value)}
                        required={true}
                        maxLength={300}
                        className="border border-blue-300 rounded-lg w-full p-1 min-h-[70px]"
                        placeholder="El paciente sufre de dolor abdominal..."
                      />
                    </div>
                    <div className="grid grid-cols-1 snap-none">
                      <div className="font-bold my-2">Fecha próxima cita: </div>
                      <input
                        type="date"
                        id={formValues["Fecha Próxima Cita"]}
                        onChange={(e) => (formValues["Fecha Próxima Cita"] = e.target.value)}
                        required
                        className="mt-1 block w-full border border-blue-300 rounded-md transition duration-300 ease-in-out focus:border-blue-500 p-1 focus:decoration-transparent"
                      />
                    </div>
                    <div className="flex items-center justify-evenly space-x-4 ">
                      <p className="text-gray-900 text-xs font-bold xs:w-[200px]">
                        ¿Todo listo?
                        <br></br>Clickea en:
                      </p>
                      <button
                        type="submit"
                        className="bg-slate-800 hover:bg-blue-600 text-white text-[10px] py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none flex items-center space-x-2 transition duration-300 ease-in-out w-[200px] justify-evenly uppercase font-bold"
                      >
                        Ingresar cita
                        <FaChevronRight></FaChevronRight>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map over inputNames to generate labels and input fields */}
              {/* {inputNames.map((name) => (
                <div
                  key={name}
                  className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
                >
                  <label
                    htmlFor={name}
                    className="ml-2 text-lg font-medium text-gray-700"
                  >
                    {name}:
                  </label>
                  {name === "Fecha Cita" || name === "Fecha Próxima Cita" ? (
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
                      required={name !== "Oxígeno"}
                      maxLength={300}
                      className="mt-1 block w-full border-2 border-gray-500 rounded-md transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  )}
                </div>
              ))} */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuevaConsulta;
