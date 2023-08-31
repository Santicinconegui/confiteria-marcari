import React from "react";
import { useState, useEffect } from "react";
import products from "../products.json";

const Productssweets = () => {
  const [productosMostrados, setProductosMostrados] = useState(20);
  const [mostrarMas, setMostrarMas] = useState(false);
  const [productosDulces, setProductosDulces] = useState([]);

  const mostrarMasProductos = () => {
    if (mostrarMas) {
      setProductosMostrados(20); // Mostrar solo 20 productos al hacer clic en "Ver menos"
    } else {
      setProductosMostrados(products.length); // Mostrar todos los productos al hacer clic en "Ver más"
    }
    setMostrarMas(!mostrarMas);
  };

  useEffect(() => {
    setProductosDulces(products.productos.slice(0, productosMostrados));
  }, [productosMostrados]);

  return (
    <div className="container-dulces">
      <div className="productos-tittle">
        <h3 className="tittle-section">PRODUCTOS DULCES</h3>
      </div>

      <div className="productos-container">
        {productosDulces.map((producto, index) => (
          <div key={index} className="producto">
            <p className="nombre-precio">
              <span className="nombre">{producto.nombre} ......</span>
              <span className="precio"> {producto.precio}</span>
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

export default Productssweets;
