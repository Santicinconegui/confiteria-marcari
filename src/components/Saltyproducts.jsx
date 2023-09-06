import React from "react";
import { useState, useEffect } from "react";
import products from "../products.json";

const Saltyproducts = () => {
  const [productosMostrados, setProductosMostrados] = useState(12); //cantidad de productos a mostrar
  const [mostrarMas, setMostrarMas] = useState(false);
  const [productosDulces, setProductosDulces] = useState([]);

  const mostrarMasProductos = () => {
    if (mostrarMas) {
      setProductosMostrados(12); // Mostrar solo los productos indicados al hacer clic en "Ver menos"
    } else {
      setProductosMostrados(products.length); // Mostrar todos los productos al hacer clic en "Ver mas"
    }
    setMostrarMas(!mostrarMas);
  };

  useEffect(() => {
    setProductosDulces(products.productoSalados.slice(0, productosMostrados));
  }, [productosMostrados]);
  return (
    <div className="container-dulces">
      <hr />
      <div className="fondo">
        <h3>~ VARIEDADES SALADAS ~</h3>
      </div>
      <div className="productos-container">
        {productosDulces.map((producto, index) => (
          <div key={index} className="producto">
            <p className="nombre-precio">
              <span className="nombre">{producto.nombre}...</span>
              <span className="precio"> ${producto.precio}</span>
              <p className="descr">{producto.descr}</p>
              <p className="descr">{producto.descr2}</p>
              <p className="descr">{producto.descr3}</p>
            </p>
          </div>
        ))}
      </div>
      <button onClick={mostrarMasProductos} className="ver-mas-btn">
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default Saltyproducts;
