import Amazon from "@/Components/Amazon";
import Hbo from "@/Components/Hbo";
import Layout from "@/Components/Layout";
import Netflix from "@/Components/Netflix";
import React from "react";
import styles from "../../styles/Plataformas.module.css";

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
        
      </div>

    
      <div>Disney</div>
      <div>Star</div>
      <div>Paramont</div>
      <div>Crunchiroll</div>
      <div>Youtube</div>
      <div>Spoty</div>

      <div>CARRITO</div>
    </Layout>
  );
};

export default index;
