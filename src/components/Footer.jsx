import React from "react";
import logo from "../assets/img/logo-footer.png";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="containerFooter">
        <div className="container">
          <img src={logo} className="logo-footer" alt="logo footer" />
          <p className="text-footer">
            Desde el momento en que abrimos nuestras puertas hasta el último
            cliente del día, nos dedicamos a brindarte productos que no solo
            satisfacen tus papilas gustativas, sino que también alimentan tu
            alma. Cada pan, cada pastel y cada delicia que sale de nuestro horno
            es el resultado de horas de dedicación, atención meticulosa y amor
            por nuestro oficio.
          </p>
        </div>
        <div className="footerInformation">
          <p>
            {" "}
            <FaLocationDot className="icons-footer" /> Av. Velez Sarfield 224,
            Ciudad Madero
          </p>
          <p>
            <FaPhone className="icons-footer" /> +54 11 4462-3365
          </p>
          <p>
            <FaClock className="icons-footer" />
            Martes a Domingos de 8AM a 13PM y de 15:30 a 20:30
          </p>
          <p>
            <TbWorld className=" world" />
            www.confiteriamarcari.com.ar
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>
          Marcari - Panadería y Confitería | Todos los derechos reservados ©
        </p>
      </div>
    </>
  );
};

export default Footer;
