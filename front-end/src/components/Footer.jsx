import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex justify-end">
      <div className="bg-gray-800 w-full md:w-[calc(100%-180px)] text-white">
        <div className="flex flex-col items-center ">
          <div className="flex w-full justify-center items-center mb-[-10px]">
            <img
              src="/src/img/imagenes/ordino2.png" // Reemplaza con la ruta de tu logo
              alt="Logo de Ordino"
              className="w-[100px] h-auto hover:scale-105 transition-transform duration-300" // Agrega el efecto de escala en hover
            />
          </div>

          {/* Línea blanca entre la imagen del logo y los iconos */}
          <div className="h-1 w-full bg-white my-2"></div>

          {/* Agrega enlaces a tus perfiles de redes sociales */}
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61554161728620"
              className="text-4xl hover:text-blue-500 hover:scale-110 transition-transform duration-300" // Ajusta el tamaño de la fuente y la escala
            >
              <FaFacebook className="h-[30px]" />
            </a>
            <a
              href="https://www.instagram.com/ordino.oficial/"
              className="text-4xl hover:text-pink-500 hover:scale-110 transition-transform duration-300" // Ajusta el tamaño de la fuente y la escala
            >
              <FaInstagram className="h-[30px]" />
            </a>
            <a
              href="https://twitter.com/ordinooficial "
              className="text-4xl hover:text-blue-400 hover:scale-110 transition-transform duration-300" // Ajusta el tamaño de la fuente y la escala
            >
              <FaTwitter className="h-[30px]" />
            </a>
          </div>
        </div>

        <p className="text-center mt-2 text-xs pb-2">
          © 2023 Ordino. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
