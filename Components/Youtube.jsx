import React from "react";
import styles from "../styles/Youtube.module.css";
import Image from "next/image";
import { useState } from "react";

const Youtube = () => {
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
          <Image src="/img/Youtube.png" alt="imgHome" width={80} height={80} />
        </div>
      ) : (
        <div>
          <Image src="/img/Youtube.png" alt="imgHome" width={80} height={80} />
          <div className={styles.divOns}>
            <h2 className={styles.h2large}>Precios sin impuestos</h2>
            <h3 className={styles.h3large}>Estándar: $389.</h3>
          </div>
          <div>
            <h2 className={styles.h2large}>Precios con impuestos</h2>
            <h3 className={styles.h3large}>Estándar: $680,75.</h3>
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

export default Youtube;
