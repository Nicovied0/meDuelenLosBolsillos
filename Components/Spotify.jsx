import React from "react";
import styles from "../styles/Spotify.module.css";
import Image from "next/image";
import { useState } from "react";

const Spotify = () => {
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
          <Image src="/img/Spotify.png" alt="imgHome" width={80} height={80} />
        </div>
      ) : (
        <div>
          <Image src="/img/Spotify.png" alt="imgHome" width={80} height={80} />
          <div className={styles.divOns}>
            <h2 className={styles.h2large}>Precios sin impuestos</h2>
            <h3 className={styles.h3large}>Individual: $399,00.</h3>
            <h3 className={styles.h3large}>Duo: $549,00.</h3>
            <h3 className={styles.h3large}>Familiar: $649,00.</h3>
            <h3 className={styles.h3large}>Estudiantes: $199,00.</h3>
          </div>
          <div>
            <h2 className={styles.h2large}>Precios con impuestos</h2>
            <h3 className={styles.h3large}>Individual: $698,25.</h3>
            <h3 className={styles.h3large}>Duo: $960,75.</h3>
            <h3 className={styles.h3large}>Familiar: $1.135,75.</h3>
            <h3 className={styles.h3large}>Estudiantes: $348,25.</h3>
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

export default Spotify;
