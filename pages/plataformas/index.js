import Amazon from "@/Components/Amazon";
import Hbo from "@/Components/Hbo";
import Layout from "@/Components/Layout";
import Netflix from "@/Components/Netflix";
import React from "react";
import styles from "../../styles/Plataformas.module.css";
import Youtube from "@/Components/Youtube";
import Spotify from "@/Components/Spotify";
import Disney from "@/Components/Disney";
import Paramount from "@/Components/Paramount";

const index = () => {
  return (
    <Layout>
      <div>
        <div className={styles.divs}>
          <Netflix />
        </div>
        <div className={styles.divs}>
          <Hbo />
        </div>
        <div className={styles.divs}>
          <Amazon />
        </div>
        <div className={styles.divs}>
          <Youtube />
        </div>
        <div className={styles.divs}>
          <Spotify />
        </div>
        <div className={styles.divs}>
          <Disney />
        </div>
        <div className={styles.divs}>
          <Paramount />
        </div>
      </div>

      {/* <div>CARRITO</div> */}
      <h2>
        Proximamente mas plataformas y una calculadora de multiples plataformas!
      </h2>
    </Layout>
  );
};

export default index;
