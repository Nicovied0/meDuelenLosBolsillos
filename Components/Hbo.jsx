import React from "react";
import Leyenda from "./Leyenda";

const Hbo = () => {
  return (
    <div>
      <h2>HBO MAX</h2>
      <div>
        <h2>Precios sin impuestos</h2>
        <h3>Estándar: $699.</h3>
        <h3>Estándar /3mm: $1899.</h3>
        <h3>Estándar /12mm: $5999.</h3>
      </div>
      <div>
        <Leyenda />
        <h3>Estándar: $1.223,25.</h3>
        <h3>Estándar /3mm: $3.323,25.</h3>
        <h3>Estándar /12mm: $10.498,25.</h3>
      </div>
    </div>
  );
};

export default Hbo;
