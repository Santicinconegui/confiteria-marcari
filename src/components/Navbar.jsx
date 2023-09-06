import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
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
    <>
      <nav className={isScrolled ? "navbar navbar__scrolled" : "navbar"}>
        <Link to="inicio" smooth={true} duration={500}>
          <img src={logo} alt="logo" className="logo-navbar" />
        </Link>
        <div className="social-icons">
          <a href="https://www.instagram.com/confiteriamarcari/">
            <FaInstagram className="ig-icon" />
          </a>
          <a href="https://www.facebook.com/confiteriamarcari">
            <FaSquareFacebook className="fb-icon" />
          </a>
        </div>

        <ul>
          <div className="burguer">
            <Burgerbutton clicked={clicked} handleClick={handleClick} />
          </div>
          <div className={`${clicked ? "" : "active"}`}>
            <li>
              <Link
                to="inicio"
                smooth={true}
                duration={1000}
                offset={-80}
                className="link">
                INICIO
              </Link>
            </li>
            <li>
              <Link
                to="productos"
                smooth={true}
                duration={1000}
                offset={-80}
                className="link">
                PRODUCTOS
              </Link>
            </li>
            <li>
              <Link
                to="servicio_de_lunch"
                className="link"
                smooth={true}
                duration={1000}
                offset={-80}>
                SERVICIO DE LUNCH
              </Link>
            </li>
            <li>
              <Link
                to="ubicacion"
                className="link"
                smooth={true}
                duration={1000}
                offset={-80}>
                UBICACIÓN
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
