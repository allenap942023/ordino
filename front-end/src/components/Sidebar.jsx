import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSearch, FaUserMd, FaFileMedicalAlt, FaHistory, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import Swal from 'sweetalert2';
const URLBackEnd = 'http://localhost:3000/api';

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
    var id =  window.localStorage.getItem('_id');
    var token =  window.localStorage.getItem('token');

    axios.get(`${URLBackEnd}/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer  ${token}`
      }
    }).then(
      (res) => {
        var datosRecibidos = res.data;
        console.log(datosRecibidos);
        setUsuario(datosRecibidos);
      }
    ).catch((error) => {
      console.log(error);
    });
  };

  const cerrarSesion = ()=>{
    Swal.fire({
      title: '¿Estás seguro de que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'No, cancelar'
  }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('_id');
        window.location.replace("/login");
      }
  });
    
  }
  return (
    <nav className={`fixed bg-white text-black shadow-2xl rounded-lg transition-all duration-300 z-50 ${menuOpen ? 'w-60' : 'w-16'} ${isTabletOrMobile ? 'right-0 top-0 p-4' : 'left-8 top-8'}`}>
      {isTabletOrMobile && (
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {menuOpen ? <FaUser size={30} /> : <FaBars size={30} />}
        </button>
      )}
      {menuOpen && (
        <nav>
          <nav>
          <div className="flex flex-col items-center mb-4">
            <img
              src={usuario && usuario.foto}  
              alt="Foto del doctor"
              className="w-45 h-45 rounded-full mb-2"
            />
            <h3 className="text-xl font-bold">{}</h3>
            <p className="text-md">{usuario && usuario.especialidad}</p>
            <p className="text-md">{usuario && usuario.clinica}</p>
          </div>
          <ul className="flex flex-col space-y-4">
            <li className="hover:bg-gray-200 rounded-lg transition duration-300">
              <Link to="/dashboard/new-patient" className="flex items-center space-x-2">
                <FaUser size={24} />
                <span className="text-lg">Nuevo Paciente</span>
              </Link>
            </li>
            <li className="hover:bg-gray-200 rounded-lg transition duration-300">
              <Link to="/dashboard/search" className="flex items-center space-x-2">
                <FaSearch size={24} />
                <span className="text-lg">Búsqueda</span>
              </Link>
            </li>
            <li className="hover:bg-gray-200 rounded-lg transition duration-300">
              <Link to="/dashboard/new-consultation" className="flex items-center space-x-2">
                <FaUserMd size={24} />
                <span className="text-lg">Nueva Consulta</span>
              </Link>
            </li>
            <li className="hover:bg-gray-200 rounded-lg transition duration-300">
              <Link to="/dashboard/medical-history" className="flex items-center space-x-2">
                <FaFileMedicalAlt size={24} />
                <span className="text-lg">Historial Médico</span>
              </Link>
            </li>
            <li className="hover:bg-gray-200 rounded-lg transition duration-300">
              <Link to="/dashboard/history" className="flex items-center space-x-2">
                <FaHistory size={24} />
                <span className="text-lg">Historial</span>
              </Link>
            </li>
            <li className="hover:bg-gray-200 rounded-lg transition duration-300">
              <Link to="/dashboard/profile" className="flex items-center space-x-2">
                <FaUser size={24} />
                <span className="text-lg">Perfil</span>
              </Link>
            </li>
            <li className="hover:bg-gray-200 rounded-lg transition duration-300">
              <a onClick={cerrarSesion} className="flex items-center space-x-2">
                <FaSignOutAlt size={24} />
                <span className="text-lg">Cerrar Sesión</span>
              </a>
            </li>
          </ul>
        </nav>
        </nav>
      )}
    </nav>
  );
};

export default Sidebar;

