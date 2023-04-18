import React from "react";
import { useState } from "react";
import styles from "../styles/Calculator.module.css";

const Calculator = (props) => {
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
  let calculo = input.numero * props.data[0].venta;
  let calculoImpuestos = calculo * 1.75;

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>
        {" "}
        Ingresa un monto para calcular los impuestos
      </h1>
      <div className={styles.div2}>
        <h2>Cotización dólar oficial</h2>
        <h3>${props.data[0].venta}</h3>
        {/* dolar oficial */}
      </div>
      <div className={styles.div0}>
        <input
          type="number"
          name="numero"
          placeholder="$10"
          value={input.numero}
          onChange={handleChange}
          defaultValue={1}
          className={styles.input}
        />
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <h2>Sin impuestos</h2>
          {calculo == 0 ? <></> : <h3>${calculo}</h3>}
        </div>
      </div>
      <div className={styles.div2}>
        <div>
          <h2>Total c/ imp.</h2>
          <h2>+ Imp. PAIS (30%)</h2>
          <h2>+ Imp. ganancias (45%)</h2>
        </div>
        <div  className={styles.div4}>
          {calculoImpuestos == 0 ? <></> : <h2  className={styles.h2Total}>${calculoImpuestos}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
