import React from "react";
import styles from "../styles/Amazon.module.css";
import Image from "next/image";
import { useState } from "react";

const Amazon = () => {
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
          <Image src="/img/Prime.png" alt="imgHome" width={80} height={80} />
        </div>
      ) : (
        <div>
          <Image src="/img/Prime.png" alt="imgHome" width={80} height={80} />
          <div className={styles.divOns}>
            <h2 className={styles.h2large}>Precios sin impuestos</h2>
            <h3 className={styles.h3large}>Estándar: $430.</h3>
          </div>
          <div>
            <h2 className={styles.h2large}>Precios con impuestos</h2>
            <h3 className={styles.h3large}>Estándar: $752,5.</h3>
          </div>
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

export default Amazon;

{
  /* <div>
      <h2>Amazon Prime</h2>
      <div>
        <h2>Precios sin impuestos</h2>
        <h3>Estándar: $699.</h3>
        <h3>Estándar /3mm: $1899.</h3>
        <h3>Estándar /12mm: $5999.</h3>
      </div>
    </div> */
}
