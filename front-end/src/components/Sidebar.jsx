import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaSearch,
  FaUserMd,
  FaFileMedicalAlt,
  FaHistory,
  FaSignOutAlt,
  FaBars,
  FaWindowClose,
  FaArrowDown,
  FaArrowCircleDown,
  FaLongArrowAltDown,
  FaCartArrowDown,
  FaRegArrowAltCircleDown,
  FaExpandArrowsAlt,
  FaPlus,
} from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import Swal from "sweetalert2";
const URLBackEnd = "http://localhost:3000/api";

const Sidebar = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const [menuOpen, setMenuOpen] = useState(!isTabletOrMobile);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    setMenuOpen(!isTabletOrMobile);
    obtenerInfoUsuario();
  }, [isTabletOrMobile]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const obtenerInfoUsuario = () => {
    var id = window.localStorage.getItem("_id");
    var token = window.localStorage.getItem("token");

    axios
      .get(`${URLBackEnd}/usuarios/${id}`, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        setUsuario(datosRecibidos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cerrarSesion = () => {
    Swal.fire({
      title: "¿Estás seguro de que quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("_id");
        window.location.replace("/login");
      }
    });
  };
  return (
    <nav
      className={` fixed  text-black shadow-md transition-all duration-300 z-50 font-mono ${
        menuOpen
          ? "w-[180px] h-full min-h-full "
          : "w-[40px] h-[40px] rounded-full bg-white"
      } 
      ${!isTabletOrMobile?'bg-white':''}
      ${isTabletOrMobile && menuOpen ? "w-full bg-[#ffffffe1]" : ""} 
      ${
        isTabletOrMobile && !menuOpen
          ? "flex justify-center items-center m-2"
          : ""
      }`}
    >
      {isTabletOrMobile && (
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {menuOpen ? (
            <FaPlus
              size={20}
              className={"rotate-45 m-2"}
            />
          ) : (
            <FaBars
              size={15}
            />
          )}
        </button>
      )}
      {menuOpen && (
        <nav>
          <nav>
            <div className="flex flex-col items-center pt-[30px]">
              <img
                src={usuario && usuario.foto}
                alt="Foto del doctor"
                className="w-[70px] h-[70px] rounded-full mb-2 object-cover m-5"
              />
              <h3 className="text-xl font-bold">{}</h3>
              <p className="text-xs mt-1 font-bold text-neutral-400 uppercase">
                {usuario && usuario.especialidad}
              </p>
              <p className="text-xs mt-1 font-bold text-blue-500 uppercase">
                {usuario && usuario.clinica}
              </p>
            </div>
            <div className="flex justify-center mt-[70px] mb-4">
              <ul className="flex flex-col items-start space-y-4 text-xs font-thin text-blue-800">
                <li className="hover:bg-gray-200 rounded-lg transition duration-300 p-2 cursor-pointer min-w-[150px]">
                  <Link
                    to="/dashboard/new-patient"
                    className="flex items-center space-x-2"
                  >
                    <FaUser size={15} />
                    <span className="">Nuevo Paciente</span>
                  </Link>
                </li>
                <li className="hover:bg-gray-200 rounded-lg transition duration-300 p-2 cursor-pointer min-w-[150px]">
                  <Link
                    to="/dashboard/search"
                    className="flex items-center space-x-2"
                  >
                    <FaSearch size={15} />
                    <span className="">Búsqueda</span>
                  </Link>
                </li>
                {/* <li className="hover:bg-gray-200 rounded-lg transition duration-300 p-2 cursor-pointer min-w-[150px]">
                  <Link
                    to="/dashboard/new-consultation"
                    className="flex items-center space-x-2"
                  >
                    <FaUserMd size={15} />
                    <span className="">Nueva Consulta</span>
                  </Link>
                </li>
                <li className="hover:bg-gray-200 rounded-lg transition duration-300 p-2 cursor-pointer min-w-[150px]">
                  <Link
                    to="/dashboard/medical-history"
                    className="flex items-center space-x-2 min-w-[135px]"
                  >
                    <FaFileMedicalAlt size={15} />
                    <span className="">Historial Médico</span>
                  </Link>
                </li>
                <li className="hover:bg-gray-200 rounded-lg transition duration-300 p-2 cursor-pointer min-w-[150px]">
                  <Link
                    to="/dashboard/history"
                    className="flex items-center space-x-2"
                  >
                    <FaHistory size={15} />
                    <span className="">Historial</span>
                  </Link>
                </li> */}
                {/* <li className="hover:bg-gray-200 rounded-lg transition duration-300 p-2 cursor-pointer min-w-[150px]">
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center space-x-2"
                  >
                    <FaUser size={15} />
                    <span className="">Perfil</span>
                  </Link>
                </li> */}
                <li className="hover:bg-gray-200 rounded-lg transition duration-300 p-2 cursor-pointer min-w-[150px]">
                  <a
                    onClick={cerrarSesion}
                    className="flex items-center space-x-2"
                  >
                    <FaSignOutAlt size={15} />
                    <span className="">Cerrar Sesión</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </nav>
      )}
    </nav>
  );
};

export default Sidebar;
