import React from "react";
import { FaClock } from "react-icons/fa6";

const Location = () => {
  return (
    <div id="ubicacion" className="location-container">
      <div className="location-text">
        <div className="location-description">
          <h2>UBICACIÓN</h2>
          <p>Nos encontramos en:</p>
          <br />
          <p>Av. Velez Sarfield 224, Ciudad Madero. La Matanza</p>
          <br />
          <p>Tel.: 4462-3365</p>
        </div>
        <hr />
        <br />
        <FaClock className="icon" />
        <br />
        <p>Nuestros Horarios de atención:</p>
        <br />
        <p>Martes a Domingos de 8AM a 13PM y de 15:30 a 20:30</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.3867181841156!2d-58.50668322335759!3d-34.69542476234884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a7b5d1204db%3A0xf8166b20b97fd6da!2sFABRICA%20DE%20SANDWICHES%20PANADERIA%20Y%20CONFITERIA%20MARCARI!5e0!3m2!1ses-419!2sar!4v1693339702137!5m2!1ses-419!2sar" />
    </div>
  );
};

export default Location;
