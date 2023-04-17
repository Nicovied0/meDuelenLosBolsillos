import React from "react";
import Leyenda from "./Leyenda";

const Netflix = () => {
  return (
    <div>
      <h2>Netflix</h2>
      <div>
        <h2>Precios sin impuestos</h2>
        <h3>Básico: $999.</h3>
        <h3>Estándar: $1699.</h3>
        <h3>Premium: $999.</h3>
      </div>
      <div>
        <Leyenda />
        <h3>Básico: $1.748,25.</h3>
        <h3>Estándar: $2.973,25.</h3>
        <h3>Premium: $3.323,25.</h3>
      </div>
    </div>
  );
};

export default Netflix;
