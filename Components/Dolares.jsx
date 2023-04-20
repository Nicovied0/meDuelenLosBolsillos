import React, { useState, useEffect } from "react";
import styles from "../styles/index.module.css";

const Dolares = ({ data }) => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Aquí puedes actualizar los datos necesarios para el componente
      setDatas(data);
      location.reload();
    }, 5 * 60 * 1000); // 5 minutos en milisegundos

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  // console.log(data)
  return (
    <div>
      <div className={styles.divDolares}>
        {data.map(({ nombre, venta, compra }) => (
          <div key={nombre} className={styles.divCaja}>
            <div className={styles.divCaja2}>
              <h2 className={styles.h2Dolar}>DOLAR {nombre}</h2>
              <div className={styles.divCaja3}>
                <h3 className={styles.h3dolar}>COMPRA ${compra}</h3>
                <hr className={styles.hr}></hr>
                <h3 className={styles.h3dolar}>VENTA ${venta}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dolares;
