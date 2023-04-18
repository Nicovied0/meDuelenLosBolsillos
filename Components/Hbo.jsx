import React from "react";
import styles from "../styles/HBO.module.css";
import Image from "next/image";
import { useState } from "react";

const Hbo = () => {
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
          <Image src="/img/Hbo.png" alt="imgHome" width={80} height={80} />
        </div>
      ) : (
        <div>
          <Image src="/img/Hbo.png" alt="imgHome" width={80} height={80} />
          <div className={styles.divOns}>
            <h2 className={styles.h2large}>Precios sin impuestos</h2>
            <h3 className={styles.h3large}>Estándar: $699.</h3>
            <h3 className={styles.h3large}>Estándar /3mm: $1899.</h3>
            <h3 className={styles.h3large}>Estándar /12mm: $5999.</h3>
          </div>
          <div>
            <h2 className={styles.h2large}>Precios con impuestos</h2>
            <h3 className={styles.h3large}>Estándar: $1.223,25.</h3>
            <h3 className={styles.h3large}>Estándar /3mm: $3.323,25.</h3>
            <h3 className={styles.h3large}>Estándar /12mm: $10.498,25.</h3>
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

export default Hbo;

{
  /* <h2>HBO MAX</h2>
      <div>
        <h2>Precios sin impuestos</h2>
        <h3></h3>
        <h3></h3>
        <h3></h3>
      </div>
      <div>
        <h3></h3>
        <h3></h3>
        <h3></h3> */
}
