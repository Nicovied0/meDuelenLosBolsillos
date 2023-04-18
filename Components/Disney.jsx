import React from "react";
import styles from "../styles/Disney.module.css";
import Image from "next/image";
import { useState } from "react";

const Disney = () => {
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
          <Image src="/img/Disney.png" alt="imgHome" width={80} height={80} />
        </div>
      ) : (
        <div>
          <Image src="/img/Disney.png" alt="imgHome" width={80} height={80} />
          <div className={styles.divOns}>
            <h2 className={styles.h2large}>Precios sin impuestos</h2>
            <h3 className={styles.h3large}>Disney+: $385.</h3>
            <h3 className={styles.h3large}>STAR+: $880.</h3>
            <h3 className={styles.h3large}>Disney+ y STAR+: $995.</h3>
          </div>
          <div>
            <h2 className={styles.h2large}>Precios con impuestos</h2>
            <h3 className={styles.h3large}>Disney+: $673,75.</h3>
            <h3 className={styles.h3large}>STAR+: $1.540.</h3>
            <h3 className={styles.h3large}>Disney+ y STAR+: $1.741,25.</h3>
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

export default Disney;
