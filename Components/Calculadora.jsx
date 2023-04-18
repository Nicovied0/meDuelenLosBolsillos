import React from "react";
import { useState } from "react";
import styles from "../styles/Calculator.module.css";

const Calculadora = () => {
  const [input, setInput] = useState({
    numero: "",
  });
  console.log(input.numero);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  let calculo = input.numero
  let calculoImpuestos = calculo * 1.75;

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>
        Ingresa un monto para calcular los impuestos
      </h1>
      
      <div className={styles.div0}>
        <input
          type="number"
          name="numero"
          placeholder="Ingrese el monto en pesos"
          value={input.numero}
          onChange={handleChange}
          defaultValue={1}
          className={styles.input}
        />
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <h2 className={styles.h2Larger}>Sin impuestos</h2>
          {calculo == 0 ? <></> : <h3>${calculo}</h3>}
        </div>
      </div>
      <div className={styles.div2}>
        <div>
          <h2 className={styles.h2Larger}>Total c/ imp.</h2>
          <h2>+ Imp. PAIS (30%)</h2>
          <h2>+ Imp. ganancias (45%)</h2>
        </div>
        <div className={styles.div4}>
          {calculoImpuestos == 0 ? (
            <></>
          ) : (
            <h2 className={styles.h2Total}>${calculoImpuestos} ARS</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
