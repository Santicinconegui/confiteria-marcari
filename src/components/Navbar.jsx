import React from "react";
import { useEffect, useState } from "react";
import Burgerbutton from "./Burgerbutton";
import logo from "../assets/img/logo.png";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className={isScrolled ? "navbar navbar__scrolled" : "navbar"}>
      <img src={logo} alt="logo" className="logo-navbar" />
      <div className="social-icons">
        <FaInstagram className="ig-icon" />
        <FaSquareFacebook className="fb-icon" />
      </div>

      <ul>
        <div className="burguer">
          <Burgerbutton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`${clicked ? "" : "active"}`}>
          <li>
            <a href="#inicio">INICIO</a>
          </li>
          <li>
            <a href="#productos">PRODUCTOS</a>
          </li>
          <li>
            <a href="#catering">SERVICIO DE LUNCH</a>
          </li>
          <li>
            <a href="#contacto">CONTACTO</a>
          </li>
          <li>
            <a href="#ubicacion">UBICACIÓN</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
