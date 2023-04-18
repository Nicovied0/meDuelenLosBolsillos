import React from "react";
import Leyenda from "./Leyenda";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Netflix.module.css";

const Netflix = () => {
  // let boton = false;
  const [button, setButton] = useState(false);
  function handleButton() {
    if (button === true) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  return (
    <div className={button == true ? styles.divOn : styles.div}>
      {button === false ? (
        <div className={styles.div2}>
          <Image src="/img/Netflix.png" alt="imgHome" width={80} height={80} />
        </div>
      ) : (
        <div>
          <Image src="/img/Netflix.png" alt="imgHome" width={80} height={80} />
          <div className={styles.divOns}>
            <h2 className={styles.h2large}>Precios sin impuestos</h2>
            <h3 className={styles.h3large}>Básico: $999.</h3>
            <h3 className={styles.h3large}>Estándar: $1699.</h3>
            <h3 className={styles.h3large}>Premium: $1.899.</h3>
          </div>
          <div>
            <h2 className={styles.h2large}>Precios con impuestos</h2>
            <h3 className={styles.h3large}>Básico: $1.748,25.</h3>
            <h3 className={styles.h3large}>Estándar: $2.973,25.</h3>
            <h3 className={styles.h3large}>Premium: $3.323,25.</h3>
          </div>
          {/* <Leyenda /> */}
        </div>
      )}
      <div>
        {button === true ? (
          <button onClick={handleButton} className={styles.buttonClose}>
            x
          </button>
        ) : (
          <button onClick={handleButton} className={styles.buttonOpen}>
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Netflix;
