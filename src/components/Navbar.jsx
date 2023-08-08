import React from "react";
import { useEffect, useState } from "react";
import Burgerbutton from "./Burgerbutton";

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
      <ul>
        <div className="burguer">
          <Burgerbutton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`${clicked ? "" : "active"}`}>
          <li>
            <a href="#inicio">INICIO</a>
          </li>
          <li>
            <a href="#nosotros">NOSOTROS</a>
          </li>
          <li>
            <a href="#productos">PRODUCTOS</a>
          </li>
          <li>
            <a href="#catering">CATERING</a>
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
