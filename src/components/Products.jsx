import React from "react";

const Products = () => {
  return (
    <>
      <div className="container-products" id="productos">
        <div className="subContainer-products">
          <h3 className="tittle-section">PRODUCTOS</h3>
          <h5 className="tittle-section">~Nuestras Especialidades~</h5>
        </div>
      </div>
      <div className="container-list row">
        <div className="pan"></div>
        <div className="text-list">
          <h3>PANADERÍA</h3>
          <p>
            Panes, Galletas, Pizzas, Bizcochitos, Marineras, Grisines, Talitas
            saborizadas
          </p>
        </div>{" "}
      </div>
      <div className="container-list row-reverse">
        <div className="text-list ">
          <h3>CONFITERÍA</h3>
          <p>Variedad de facturas y Bombones</p>
        </div>
        <div className="confiteria"></div>
      </div>
      <div className="container-list row">
        <div className="sandwicheria"></div>
        <div className="text-list">
          <h3>SANDWICHERíA</h3>
          <p>Variedad de sandwiches de miga </p>
        </div>
      </div>
    </>
  );
};

export default Products;
