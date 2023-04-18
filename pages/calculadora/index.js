import React from "react";
import Layout from "@/Components/Layout";
import { useState } from "react";
import styles from "../../styles/Calculator.module.css";

import Calculator from "@/Components/Calculator";
import Calculadora from "@/Components/Calculadora";

const index = ({ data }) => {
  let info = data;

  const [button, setButton] = useState(false);
  function handleButton() {
    if (button === true) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  return (
    <Layout>
      {button === true ? <Calculadora /> : <Calculator data={info} />}
      {button === false ? (
        <>
          <h2>Quieres calculas impuestos a compras diguitales en pesos?</h2>
          <button className={styles.buttonCalcular} onClick={handleButton}>Calcular</button>
        </>
      ) : (
        <>
          <button className={styles.buttonCalcular} onClick={handleButton}>Calcular en dolares</button>
        </>
      )}
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://dolar-api-argentina.vercel.app/v1/dolares"
    );
    const data = await res.json();
    // console.log(data[0].venta);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
