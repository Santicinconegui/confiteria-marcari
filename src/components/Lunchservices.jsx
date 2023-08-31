import React, { useState } from "react";
import lunchServices from "../lunchServices.json";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Lunchservices = () => {
  const [currentService, setCurrentService] = useState(0);

  const handlePrevService = () => {
    setCurrentService((prevService) =>
      prevService > 0 ? prevService - 1 : lunchServices.length - 1
    );
  };

  const handleNextService = () => {
    setCurrentService((prevService) =>
      prevService < lunchServices.length - 1 ? prevService + 1 : 0
    );
  };
  const currentServiceData = lunchServices[currentService];
  return (
    <>
      <div className="container-products" id="servicio_de_lunch">
        <div className="subContainer-products">
          <h3 className="tittle-section">SERVICIO DE LUNCH</h3>
          <h5 className="tittle-section">~Nuestros Servicios de Lunch~</h5>
        </div>
      </div>
      <div className="container-lunch">
        <h2>{currentServiceData.Tittle}</h2>
        <p>{currentServiceData.gift}</p>
        <hr />
        <div className="right-price">
          <span className="price">${currentServiceData.price}</span>
        </div>

        <ul className="list-lunch">
          {currentServiceData.products.map((product) => (
            <li key={product.name}>
              <h3>{product.name}</h3>
            </li>
          ))}
        </ul>
        <div onClick={handlePrevService} className="left-button">
          <HiChevronLeft className="carousel-icon-left fade" />
        </div>
        <div onClick={handleNextService} className=" right-button">
          <HiChevronRight className="carousel-icon-right fade" />
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Lunchservices;
