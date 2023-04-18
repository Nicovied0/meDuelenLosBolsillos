import React from "react";
import { useState } from "react";
import styles from "../styles/Calculator.module.css";

import Calculator from "@/Components/Calculator";
import Calculadora from "@/Components/Calculadora";

const Calculadoras = ({ info }) => {
  const [button, setButton] = useState(false);
  function handleButton() {
    if (button === true) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  return (
    <div className={styles.divGrande}>
      {button === true ? <Calculadora /> : <Calculator data={info} />}
      {button === false ? (
        <>
          <h2>Quieres calculas impuestos a compras diguitales en pesos?</h2>
          <button className={styles.buttonCalcular} onClick={handleButton}>
            Calcular
          </button>
        </>
      ) : (
        <>
          <button className={styles.buttonCalcular} onClick={handleButton}>
            Calcular en dolares
          </button>
        </>
      )}
    </div>
  );
};

export default Calculadoras;
